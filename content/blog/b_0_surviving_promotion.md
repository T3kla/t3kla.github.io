+++
title = "Surviving the Startup"
date = 2024-08-21
[extra]
tags = ["Rant"]
+++

This post is being actively being worked on!

<!-- Why is that being promoted as a programmer forces you to program less and less?

Why is that the reward for being good at your job is to not been able to do it?

This is the story of how in a period of 1.5 years I went from **Junior Gameplay Developer** to **Lead Programmer** and a rant about the inevitable fact of how promotions will stop you from doing whatever you were promoted for. -->

<!-- This is the story of one of my first jobs in the videogame industry, as well as light hearted remembrance of the thoughts I had at the time.

## The job

I distinctly remember the third interview for this job, a somewhat relaxed meeting with the CEO of the studio. One of the questions that, although as typical as they get, stood out the most was **"Where do your see yourself 2 years from now?"**.

Up until this point I had only work in part time jobs, personal projects or in game studios with less future than a 2024 JavaScript Framework, so I never thought about my development in a serious studio environment. To be honest, my only aspiration at this time was to not be fired the first month. But alas, the 4 seconds I took to think rendered one lucky answer.

I said: **"I wanna be CTO!"**.

## The team

For some reason, the CEO took that statement really well, so much so as to encourage me to try to reach for it since the role was vacant anyway. In retrospect, this was a **red flag** that I failed to spot at the time, since on a normal team there should already be someone knowledgeable enough as to get there before me.

This was **not** the case whatsoever. At this point the team was composed by three pirates and one programmer. I can not call them anything else than pirates since the only thing I watched them do was break havoc in the codebase, and knowing that they were getting paid felt as a robbery! It's not that they were failing to do their job, it was more like they were intentionally breaking stuff up so the game could never be played.

## The codebase

It was broken. Broken as fuck. Broken as I have never seen before. Making it compile without errors was a monumental task, but playing in-editor was downright impossible. Making a distributable package to play elsewhere was but a distant dream. Stability was a huge problem:

- Play single-player in editor? Crash.
- Play multi-player with 2 clients? Crash.
- Hot reload? Crash.
- Recompile with the editor open? Crash.
- Delete a loot-chest from the map? 30 minutes freeze, then crash.

Also, almost any native Unreal Editor feature that the team tried to use would crash the engine, such as profiling, searching assets, moving to another map or editing a map. I have seen some nasty code over the years but nothing up to this level. This was something else, almost intentionally evil, and a mystery to me. So I approached my boss (Lemon from now on) and asked how did this came to be.

Turns out that somehow the old Tech Artist (Chad from now on) convinced Lemon to make a huge refactor which lasted for 6 months, just to leave the studio half way through. To this day, I have no clue as to why Lemon accepted this premise, but now they were somewhat in between upset and traumatized, and wouldn't accept any work but bug-fixing.

At some point I proposed to make the game again in the latest version of the engine, or even in another engine so we could port to other platforms with ease (I am proficient in many engines and heard Lemon talking about a mobile version at some point) but to no avail. They were just too deep in the sunken-cost fallacy to realize that this was the best option at the time.

## Then what

1 month later a dear friend of mine was hired (Cat from now on, also helped me get the job in first place lol). 2 months later we could convince Lemon to fire 2 of the pirates (the last one left on his own) and we started to fix the game little by little. From the moment I was hired to the moment the game became playable, 6 months had passed. We fixed around 300 crashes and re-enabled almost all the systems that were functional before, as well as making new ones.

We were still dragging extremely convoluted and opaque systems left behind by Chad, since Lemon didn't let us refactor them, but we were miles away from were we started. Lemon finally started to trust my judgement and both Cat and me got promoted to regular programmers. No more junior bullshit.

## Ascend!

At this point, the game works as intended and bosses start promoting it. A marketing team is hired and we started being visited almost daily by investors. A new producer arrives (Muffin from now on), we start working with dates and milestones, and they start hiring everyone that even dares to look our way. The team doubles in size, and suddenly, **we need a Lead**.

Up to this point, I have been the most outspoken trash talker in the team. I have called out every bad decision, and I have corrected it when I could. I have openly swear to physically hurt anyone that dares to break whatever I had just fix, multiple times, but even tho I'm not the most subtle speaker, the team did rely on me to fix stuff. I was teaching Git almost daily, designers and artist came to me when they had a problem, and I was quick to delegate tasks and mentor other programmers into whatever system they had the unfortunate luck to stumble into.

There was a clear social structure in place and I was at the top, and Cat was a close second, so Muffin took into his hands the task of making things official, and started pushing for our respective promotions. Soon later, Cat is now Team Manager and I'm Lead.

## Life as a Lead

This was not fun. Not fun at all. Some weeks ago I was cruising through code as no-ones business and now I'm getting 2 hours of codding per week at best. I was outspokenly not happy and Muffin was not happy about my "outspokency". Soon after, I could talk him out of half of the meets we were having, like dailies, weeklies and half of the department meets. This lowered the amount of meets from 8 to 3 a week, although we kept having "crisis meets" now and again for every minute reason you can think of.

- Why is that being promoted as a programmer forces you to program less and less?
- Why is that the reward for being good at your job is to not been able to do it?

Anyway, with the help of Cat, we took the reigns of programming roadmap and we could see light at the end of the tunnel for the first time in many many months. We had all sorts of plans on how to fix the game and we quickly prepared a roadmap that would catapult the game into a new era of stability and performance. Or so we thought.

## Release date

**Wat**.

We have just started working with milestones, so we were not really used to having dates for specific tasks. While we did use Jira, and tasks had dates on them, they were more like roadside signals than anything else. Now they were a brick wall.

Our shiny new roadmap combusted spontaneously, and we were task to make another one that would contain the requirements for the release date. And oh boy there were requirements, 32 of them to be precise, estimated to be ready for the release date **if and only if** they were to be worked on by a team of 8 programmers during 3 months. No contingency, no bugfixing and no polishing fitted in the roadmap. We just didn't have the physical time for it.

Some team members asked why we didn't asked for more than 8 programmers, but this is just the same as asking why do two pregnant women can't have their babies in half the time. **Not all workflows are parallelizable**. Some things need that extra time. Specially in videogames. Specially when you want to provide that extra polish that leaves a palatable taste in the hands of the players when they finish playing your game.

But we were having none of that.

##

# Conclusions

> Let dreams be dreams, because no dream comes true as dreamed. - **Me** -->
