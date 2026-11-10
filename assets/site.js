/* Generative Print Series: shared behaviour for every page.
   - paper figures drawn on <canvas class="sheet">
   - the parts of a chapter (one shown at a time)
   - fields that remember what you typed
   - problem sets: everything is submitted together, and only then do the answers appear
   Nothing here talks to a server. What you type stays in this browser. */
(function () {
  'use strict';

  const GPS = (window.GPS = {});
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const store = {
    get(key, fallback) { try { const v = localStorage.getItem(key); return v == null ? fallback : JSON.parse(v); } catch (e) { return fallback; } },
    set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {} }
  };
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };

  GPS.$ = $; GPS.$$ = $$; GPS.store = store;
  GPS.TAU = Math.PI * 2;
  GPS.LABEL = '500 12px "IBM Plex Sans", system-ui, sans-serif';
  GPS.f3 = (v) => (Math.abs(v) < 5e-4 ? 0 : v).toFixed(3);
  GPS.thousands = (n) => Math.round(n).toLocaleString('en-US');

  /* ---------- paper figures ---------- */

  // The colours of the sheet, read from the stylesheet so figures follow light and dark mode.
  GPS.tok = () => {
    const s = getComputedStyle(document.documentElement), g = (n) => s.getPropertyValue(n).trim();
    return { paper: g('--paper'), ink: g('--paper-ink'), muted: g('--paper-muted'), rule: g('--paper-rule'),
             c: g('--c'), m: g('--m'), y: g('--y'), cInk: g('--pc-ink'), mInk: g('--pm-ink') };
  };

  // Size a canvas to its laid-out width at the screen's resolution.
  // Returns a context that works in CSS pixels, or null while the canvas is hidden.
  GPS.fit = (cv, aspect) => {
    const w = cv.clientWidth; if (!w) return null;
    const h = Math.round(w * aspect), d = Math.min(window.devicePixelRatio || 1, 3);
    cv.style.height = h + 'px';
    cv.width = Math.round(w * d); cv.height = Math.round(h * d);
    const c = cv.getContext('2d'); c.setTransform(d, 0, 0, d, 0, 0);
    return { c, w, h };
  };

  // A blank sheet of paper, ready to draw on.
  GPS.sheet = (cv, aspect) => {
    const f = GPS.fit(cv, aspect); if (!f) return null;
    f.t = GPS.tok();
    f.c.fillStyle = f.t.paper; f.c.fillRect(0, 0, f.w, f.h);
    f.c.lineCap = 'round'; f.c.lineJoin = 'round'; f.c.font = GPS.LABEL;
    return f;
  };

  // A small arrow from (x1, y1) to (x2, y2).
  GPS.arrow = (c, x1, y1, x2, y2) => {
    const a = Math.atan2(y2 - y1, x2 - x1), s = 5;
    c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2);
    c.moveTo(x2, y2); c.lineTo(x2 - s * Math.cos(a - 0.5), y2 - s * Math.sin(a - 0.5));
    c.moveTo(x2, y2); c.lineTo(x2 - s * Math.cos(a + 0.5), y2 - s * Math.sin(a + 0.5));
    c.stroke();
  };

  const figures = [];
  GPS.figure = (draw) => { figures.push(draw); return draw; };
  GPS.redraw = () => { figures.forEach((draw) => draw()); };

  /* ---------- the parts of a chapter ---------- */

  function initParts() {
    const nav = $('[data-parts]'); if (!nav) return;
    const parts = $$('[data-part]'), names = parts.map((p) => p.dataset.part);
    const key = 'gps.part.' + (location.pathname.split('/').pop() || 'index');
    function show(name, cameFromBelow) {
      if (!names.includes(name)) name = names[0];
      parts.forEach((p) => { p.hidden = p.dataset.part !== name; });
      $$('button', nav).forEach((b) => b.setAttribute('aria-current', String(b.dataset.go === name)));
      store.set(key, name);
      if (cameFromBelow && nav.getBoundingClientRect().top < 0) nav.scrollIntoView();
      GPS.redraw();
    }
    $$('[data-go]').forEach((b) => b.addEventListener('click', () => show(b.dataset.go, true)));
    show(store.get(key, names[0]), false);
  }

  /* ---------- fields that remember ---------- */

  function initSaved() {
    $$('[data-save]').forEach((f) => {
      const key = 'gps.' + f.dataset.save, v = store.get(key, null);
      if (v != null) f.value = v;
      f.addEventListener('input', () => store.set(key, f.value));
    });
  }

  function copyText(text, button) {
    const label = button.textContent;
    const done = (ok) => { button.textContent = ok ? 'Copied' : 'Press Ctrl+C or Cmd+C'; setTimeout(() => { button.textContent = label; }, 1800); };
    const viaSelection = () => {
      const t = el('textarea'); t.value = text; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0';
      document.body.appendChild(t); t.select();
      let ok = false; try { ok = document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(t); done(ok);
    };
    try { navigator.clipboard.writeText(text).then(() => done(true), viaSelection); } catch (e) { viaSelection(); }
  }

  function initCopy() {
    $$('[data-copy]').forEach((b) => b.addEventListener('click', () => copyText($(b.dataset.copy).textContent, b)));
  }

  /* ---------- problem sets ---------- */

  function initSet(set) {
    const key = 'gps.set.' + set.dataset.set;
    const fields = $$('input.blank, select.blank, textarea.own', set), qs = $$('.q', set);
    const submit = $('[data-submit]', set), before = $('[data-before]', set), after = $('[data-after]', set), status = $('[data-status]', set);
    let st = store.get(key, null) || { v: {}, done: false }, armed = false;

    const text = (f) => String(f.value || '').trim();
    const right = (f) => {
      if (f.tagName === 'SELECT') return f.value === f.dataset.a;
      const v = parseFloat(text(f).replace(',', '.').replace('−', '-'));
      return Math.abs(v - parseFloat(f.dataset.a)) <= parseFloat(f.dataset.tol || '0.0021');
    };
    const paint = () => { submit.textContent = armed ? 'Some are blank. Submit anyway' : 'Submit all answers'; };
    const lock = (on) => fields.forEach((f) => { if (f.tagName === 'SELECT') f.disabled = on; else f.readOnly = on; });
    const join = (xs) => xs.length < 2 ? xs.join('') : xs.slice(0, -1).join(', ') + ' and ' + xs[xs.length - 1];

    fields.forEach((f, i) => {
      if (st.v[i] != null) f.value = st.v[i];
      const edited = () => { st.v[i] = f.value; store.set(key, st); if (armed) { armed = false; paint(); } };
      f.addEventListener('input', edited); f.addEventListener('change', edited);
    });

    function reveal() {
      let checked = 0, good = 0; const own = [];
      qs.forEach((q) => {
        const marks = $$('[data-a]', q), verdict = $('.verdict', q), answer = $('.answer', q);
        q.classList.remove('q-ok', 'q-no', 'q-own');
        if (marks.length) {
          const ok = marks.every(right); checked++; if (ok) good++;
          q.classList.add(ok ? 'q-ok' : 'q-no');
          marks.forEach((f) => { const r = right(f); f.classList.toggle('ok', r); f.classList.toggle('no', !r); });
          if (verdict) verdict.textContent = ok ? 'Right.' : 'Not quite.';
        } else {
          q.classList.add('q-own'); own.push(q.dataset.q);
          if (verdict) verdict.textContent = 'In your own words. Compare yours with this:';
        }
        if (answer) answer.hidden = false;
      });
      lock(true); set.classList.add('submitted'); before.hidden = true; after.hidden = false;
      status.textContent = 'You got ' + good + ' of ' + checked + ' right.' +
        (own.length ? ' Problem' + (own.length > 1 ? 's ' : ' ') + join(own) + (own.length > 1 ? ' are' : ' is') + ' in your own words, so compare with the answer shown.' : '');
    }

    function reset() {
      st = { v: {}, done: false }; store.set(key, st); armed = false; paint();
      fields.forEach((f) => { f.value = ''; f.classList.remove('ok', 'no'); });
      qs.forEach((q) => { q.classList.remove('q-ok', 'q-no', 'q-own'); const a = $('.answer', q); if (a) a.hidden = true; });
      lock(false); set.classList.remove('submitted'); before.hidden = false; after.hidden = true;
      set.scrollIntoView();
    }

    submit.addEventListener('click', () => {
      const blanks = fields.filter((f) => !text(f)).length;
      if (blanks && !armed) { armed = true; paint(); return; }
      st.done = true; store.set(key, st); reveal(); set.scrollIntoView();
    });
    const again = $('[data-again]', set); if (again) again.addEventListener('click', reset);
    const copy = $('[data-copy-answers]', set);
    if (copy) copy.addEventListener('click', () => {
      const lines = [document.title, ''];
      $$('[data-save]').forEach((f) => { lines.push((f.getAttribute('aria-label') || 'My attempt') + ':', text(f) || '(blank)', ''); });
      lines.push('My practice answers:');
      qs.forEach((q) => {
        const mine = $$('input.blank, select.blank, textarea.own', q).map((f) => text(f) || '(blank)');
        const mark = q.classList.contains('q-ok') ? '  [right]' : q.classList.contains('q-no') ? '  [not quite]' : '';
        lines.push(q.dataset.q + '. ' + mine.join(' | ') + mark);
      });
      copyText(lines.join('\n'), copy);
    });

    paint();
    if (st.done) reveal();
  }

  /* ---------- the map ---------- */

  function initMap() {
    const host = $('#chapters'), list = window.GPS_CHAPTERS; if (!host || !list) return;
    let stage = null, ol = null;
    list.forEach((ch) => {
      if (ch.stage !== stage) { stage = ch.stage; host.appendChild(el('h2', 'label stage', stage)); ol = el('ol', 'chapters'); host.appendChild(ol); }
      const li = el('li', ch.file ? '' : 'later'), row = el(ch.file ? 'a' : 'div', 'chrow');
      if (ch.file) row.href = ch.file;
      row.appendChild(el('span', 'n', String(ch.n)));
      row.appendChild(el('span', 't', ch.title));
      if (ch.file) row.appendChild(el('span', 'go', 'Read'));
      row.appendChild(el('span', 'g', ch.does));
      li.appendChild(row); ol.appendChild(li);
    });
  }

  /* ---------- start ---------- */

  initMap(); initSaved(); initCopy(); $$('.set').forEach(initSet); initParts();

  let resizing;
  window.addEventListener('resize', () => { clearTimeout(resizing); resizing = setTimeout(GPS.redraw, 80); });
  window.addEventListener('load', GPS.redraw);
  try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', GPS.redraw); } catch (e) {}
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(GPS.redraw);
})();
