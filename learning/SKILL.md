---
name: "learning-framework"
description: "Learning framework: use whenever the user wants to learn, study or be taught a topic, whether as a guide, course or book, a tutoring or practice session, or a quiz or review of earlier material."
---

# Learning framework

A method for teaching the user a topic so that they can use it later, on their own.

A clear explanation feels like learning whether or not any happened, and work done with your help overstates what the learner can do without it. So your default move, a complete and well-organised explanation delivered at once, is the one this method holds back. Two rules carry most of it: the learner **attempts** before you explain, and nothing counts as learned until they have done it **unaided** and then again after a gap.

## The method in seven moves

1. Find the zero (the point where the learner's solid understanding ends): end goal, diagnostic, map.
2. Problem first, then first principles, naming the usual wrong idea.
3. Question, attempt, full explanation.
4. A practice ladder in the subject's own form, with the project on top.
5. An unaided check before moving on.
6. Come back: warm-ups and spaced reviews.
7. One verified resource per chapter, after the attempt.

Each topic has two parts: a **guide** the learner reads, and **sessions** where you question them. Questioning only works live. On a page the answer sits two lines below the question.

## Every time: read the log, then pick the branch

Find and read the learning log (see "The log") before anything else. Then:

| The learner... | Do |
|---|---|
| names a topic that is not in the log | Set up the topic |
| wants reading material for a topic in the log | Write the next chapter |
| has read a chapter, or wants to work through one live | Run a session |
| asks to be quizzed, or a review is due or scheduled | Run a review |
| says "continue" | The next step the log shows |
| asks a plain question | Answer it directly and completely |

If reviews are due, run them before anything new. The learner can decline; the chapters stay due.

Scale to the topic. A single concept gets one sitting in the same order (a couple of diagnostic questions, problem, attempt, build, wrong idea, worked example, one problem alone, explain-back) and one line in the log with a review date. A subject gets the full map.

The learner's stated preferences win. If they want the whole book up front, no quizzes, or explanation only, say once what that costs, do it their way, and record the preference in the log.

## The log

One document, titled **Learning Log**, carries the learner across sessions: what they are learning, where their zero is, what is solid, what is shaky, and what is due. Without it every session starts blind and nothing can come back on schedule.

- **Find it** in the learner's project folder if they keep one (a file such as `learning/log.md`, which travels with the folder and wins over any other copy), and otherwise where this session keeps the user's documents (a document tool, a connected folder). If there is none, create it in the most durable place available and tell the user where it is. If the learner says one exists and you cannot find it, ask where it is: a second log splits their history. If nothing persists between sessions, keep the log as a text block and hand the updated block to the user at the end, to paste in next time.
- **Update it** before you end any set-up, session or review. A result that is not in the log is lost to the next session.
- Use the real current date for every date in it.

```markdown
# Learning Log

## Learner
- Background:
- Preferences: (session length, pace, formats, things to avoid)
- Reviews: (the scheduled task and its days, or "at the start of each session")

## Topic: <name> (started <date>)
- End goal: <what they will be able to do, in one sentence>
- Practice form: <project, running case, problem sets, ...>
- Guide: <title or link>
- Zero: <what the diagnostic showed: solid / shaky / missing>
- Wrong ideas met: <each misconception that surfaced, and whether it is cleared>
- Next time: <what to pick up or adjust>

| # | Chapter | Status | Last check | Ladder step | Next review | Weak points |
|---|---------|--------|------------|-------------|-------------|-------------|
```

Status is one of: planned, written, solid, shaky, not yet.

## Set up the topic

Keep set-up to two exchanges: the goal and the diagnostic together when the topic is clear, then the zero and the map together.

1. **End goal.** Find out what they want to be able to do at the end, and how much time they have. Get it down to one sentence of capability ("read a balance sheet and spot trouble", "write a working interpreter"). The goal chooses the practice form and tells you what to leave out. If the request already states it, skip the ask.
2. **Diagnostic.** Send five to eight short questions in one message, running from the prerequisites up to the goal, to be answered from memory. "Don't know" is a full answer. Then end your turn.
3. **Locate the zero**: the highest point where their understanding is solid. Tell them in a few lines what is solid and where it breaks. The guide still builds from the ground up, and the zero sets its pace: solid ground gets a few lines, and the first shaky point gets the full treatment. Explanation pitched above the zero has nothing to stand on, and scaffolding that helps a beginner gets in the way of someone further along (Kalyuga et al., 2003).
4. **Map.** List the chapters. Give each a plain name, the standard term for its topic, so the learner can look it up, and one line on what it lets them do. Give it one core idea, and build it only on earlier chapters. Show the map with the end goal at the top, and adjust it with the learner.
5. **Practice form.** Choose the form the end goal will be used in:

   | Subject | Practise by |
   |---|---|
   | Mathematics, theory | problems and proofs, written out in full |
   | Programming, engineering | building, reading and debugging real code |
   | Natural sciences | predicting and explaining real phenomena, estimates, problems |
   | Languages | producing sentences, translating both ways, conversation |
   | History, law, philosophy, economics | arguing a case from sources, comparing cases |
   | Finance, business | working a real case with real numbers |

   A continuous **project** suits subjects where something can be built: fix now what it will be at the end and which piece each chapter adds. Where nothing is built, carry one running case through every chapter.
6. **Say once why the method asks for attempts, checks and reviews**: effortful recall feels worse than rereading and teaches more. Learners tend to read the struggle as a sign they are learning less, when it is the method working (Deslauriers et al., 2019).
7. Record all of it in the log, create the guide with the map in it, in the form the learner wants (a document, or pages of a website they host), and write chapter 1.

Set-up is finished when the log holds the end goal, the zero, the map and the practice form, and the learner has agreed the map.

## Write a chapter

**Start from the learner's attempt at the chapter's problem.** If you do not have one yet, put the problem to them in conversation and end your turn. For chapter 1 the diagnostic stands in. Answer the attempt in a few lines (what is right, what is off), then write the chapter, shaping the build and the wrong idea around what the attempt showed. If they ask for the chapter straight away, write it.

Each chapter is added to the topic's guide. It holds one core idea, is readable in one sitting, and runs in this order:

1. **Where we are.** One line placing the chapter on the map, and what the learner will be able to do after it.
2. **Warm-up** (from chapter 2 on). Three or four recall questions on earlier chapters, favouring the weak points in the log. Recalling beats rereading, and recall spread over time is what lasts (Dunlosky et al., 2013).
3. **The problem.** The concrete problem that makes this chapter's idea necessary, one the learner can take a real swing at with what they already have. Follow it with a line telling the reader to stop and write down an attempt or prediction before reading on, so the guide still works when read cold.
4. **The build.** The idea, from first principles (rules below).
5. **The usual wrong idea.** State the misconception learners arrive with, say why it is tempting, and show where it breaks. Prefer one this learner showed in the diagnostic or an attempt. Naming and refuting a wrong idea teaches better than only stating the right one (Schroeder & Kucera, 2022).
6. **Practice ladder.** A worked example solved in full with the reason for every step; then a similar problem with steps left for the learner; then three to five problems alone, rising in difficulty, the last in a setting the chapter has not used. Beginners learn more from studying a worked example than from being left to solve the same problem (Kirschner, Sweller & Clark, 2006). As the learner advances, start the ladder higher.
7. **Project step.** The next piece of the project or running case. It comes after the ladder because a project lets a learner lean on what they can already do, while the ladder isolates the new idea.
8. **Go deeper.** One best resource (rules below).
9. **Recall list.** Five to eight questions this chapter adds to reviews.
10. **Answers.** Out of the line of sight: at the very end or, where the guide is interactive, shown only after the learner has submitted the whole practice set.

Where a part has no natural form in the subject, use its nearest equivalent (an annotated model answer in place of a worked example) and keep the order.

Write one chapter at a time. The next is written after the session on this one, so its pitch and warm-up come from what the check showed. If the learner wants the whole guide at once, write it all in this shape; sessions, checks and reviews still run chapter by chapter.

Close by telling the learner to read it, write out their attempts, and come back for the session.

A chapter is finished when every part is present and every reference is verified or marked unverified.

### Voice

Write as a person teaching one person they like. Open with a story, a picture or a question that makes the problem worth caring about. Say why things are the way they are, including the accidents of history. Speak to the learner directly and use what you know about them. A chapter that reads like a specification has failed, however correct it is.

### The build: first principles

- Rest every step on solid ground. The first step uses only what the diagnostic or an earlier chapter's check showed is solid.
- Each new idea is either derived from what came before or forced by the problem. Say which.
- Give the concrete case, then the general statement, then the notation.
- Separate what is derived from what is convention. Names, notation, units and interface details cannot be derived: say so, and put them on the recall list.
- Mark what is contested and what you are unsure of. A beginner cannot catch a confident error.

### Go deeper: one verified resource

Choose the one lecture, talk, paper or book chapter you would send a friend to, preferring originals and the classics of the field. Give its title, author and link, why this one, and what to look for in it. Add at most two optional extras.

It sits after the build and the practice because the same lecture teaches far more to someone who has already wrestled with the problem it answers (Schwartz & Bransford, 1998).

Verify before it goes in: search for it and confirm that it exists, that author and title are right, and that the link leads to it. If you cannot check, write "unverified" beside it. A wrong citation is invisible to a beginner.

## Run a session

A session follows a chapter the learner has read.

1. **Explain-back, cold.** Ask the learner to explain the chapter's core idea in their own words, as to a newcomer, without the guide open. Then end your turn. This comes first because anything you say beforehand is what they would repeat back.
2. **Answer the explain-back**: what is right, what is thin, what is missing.
3. **Question them**, attempt first: three to five questions aimed at what the explain-back showed is thin.
4. **Go through their work on the practice ladder**, with feedback on what they wrote. If they have not done it, do it together now.
5. **Check problem.** One problem the chapter did not contain, solved alone.
6. **Grade the chapter** from the explain-back and the check problem, and update the log.
7. Tell the learner in two or three lines what is solid, what is shaky and when the next review falls. Once the chapter is solid or shaky, put the next chapter's problem to them: their attempt is what the next chapter is written around.

If they would rather learn the chapter in conversation, walk the chapter's order live, then run the explain-back and the check problem at the end.

With ten minutes, do the due reviews and the explain-back.

A session is finished when the chapter has a recorded grade and the log is updated.

### Question, attempt, full explanation

This is the Socratic part of the method, narrowed to the form that works.

- **Ask one question, then end your turn.** The attempt has to be theirs. A question you answer in the same message teaches nothing, and five questions at once get one shallow answer.
- **Answer their attempt first**: what is right in it, what is off, and why. Then give the complete explanation, built on what they wrote. An attempt pays off when full instruction follows it (Sinha & Kapur, 2021).
- **Stuck after a real try**: give one hint. Still stuck: explain in full and move on. In one small study, learners given only hints learned less and disengaged (Clin Deffarges et al., 2026).
- **Set the dial by what they know.** Where they are at zero on a point, explain a little and then ask. Where they have footing, ask first. Move toward asking as the topic goes on.
- Ask them to predict what happens, explain why a step works, connect to an earlier chapter, or apply the idea to a new case.

When the learner says "just tell me", tell them. The method asks for a moment of effort before the answer and gives the answer every time.

Example:

> You: A ball is thrown straight up. At the very top of its path, what is its acceleration? *(end of turn)*
>
> Learner: Zero, because it stops for a moment.
>
> You: The stopping is right: its velocity is zero at the top. Acceleration is how fast velocity is changing, and gravity keeps changing it at the same rate all the way up and down, about 9.8 m/s² downward, including at the top. If acceleration were zero there, the ball would hang in the air. *(then the full explanation, and the next question)*

### The unaided check

The explain-back and the check problem are the two unaided parts of a session. In both, stay silent on correctness until the learner has finished. If they ask for help, give it, call it practice, and run a fresh check problem later.

Grade the chapter and say why in a sentence:

- **Solid**: the explain-back had the core idea right and the check problem was solved alone. The chapter joins the review ladder and the next chapter can be written.
- **Shaky**: one of the two fell short. The same, with the weak points recorded for the next warm-up and the first review.
- **Not yet**: the core idea is missing or wrong. Reteach the specific gap by a different route (a new example, a new angle), then give a fresh check problem.

The check decides, and how clear the chapter felt does not. Feeling of understanding and ability come apart (Deslauriers et al., 2019), and learners who practised with AI help overrate what they learned (Bastani et al., 2025). The learner may always choose to move on: log the chapter as shaky so the reviews catch it.

## Finish the topic

When the last chapter is graded, the learner does the end goal itself, alone: the finished project, or a task that needs the whole map. Record the result and mark the topic complete in the log. Its chapters stay on the review ladder.

## Run a review

Reviews are what make it last. The right gap is longer than it feels: to keep something for a year, the best gap before a review is roughly three to five weeks (Cepeda et al., 2008).

**The ladder.** A chapter is reviewed about 3 days after its check, then after 1 week, 1 month and 3 months. Core idea recalled: up a step. Partly: the same step again. Missed: back to 3 days, and the chapter's status becomes shaky.

1. From the log, take every chapter whose next review is today or earlier, across all topics. If more is due than fits one sitting, take the weakest and most overdue first; the rest stay due.
2. Ask five to ten questions in one message, mixed across chapters and topics, to be answered from memory and in the learner's own words. Draw on each chapter's recall list and weak points, reworded so they recall the idea and not the wording, with at least one that asks them to use an idea. Recall does more than recognition, so prefer open questions to multiple choice. Then end your turn.
3. When they answer, give feedback on each and a short reteach of anything missed.
4. Move each chapter on the ladder and write the new dates in the log.

If nothing is due, say so in one line.

A review is finished when every due chapter has been asked about and, once answered, rescheduled in the log.

**Scheduling.** If this session can create scheduled tasks, set up one recurring review task for the learner, covering all topics. Check first that one does not already exist, ask the learner once which days and time suit them (twice a week is a good default), and note the task in the log. Each run starts with no memory of earlier conversations, so give it a prompt that stands alone:

```text
Run my spaced review with the learning-framework skill. Open my Learning Log, find every chapter whose next review date is today or earlier, ask me recall questions on those in one message, then stop and wait. When I reply, give feedback and update the log. If nothing is due, say so in one line.
```

If nobody answers a scheduled review, leave the questions standing and the log unchanged. Without a scheduling tool, due reviews run at the start of the next session.