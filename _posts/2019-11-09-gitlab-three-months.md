---
layout: post
page-title: My first 3 months in GitLab
title: 90 days of GitLab
subtitle: Looking back at my first 3 months as Engineer @ GitLab
---

I have worked at GitLab for [over 3 months](/2019-07-27-new-gitlabber/) as a [Frontend Engineer](/) and former colleagues and friends have expressed curiosity about what it's like to work at GitLab.

I think is important to check-in on my work and professional life for these past months, and say something about my experience working in this fantasy-made company that has no offices.

## Day 1: Here's 300+ things for you to do

In GitLab parlance, an *issue* is generally a task or assignment which should be done by someone in the team. On day one, the GitLab People ops team, our HR, has already prepared an **Onboarding Issue** for each team member, which contains the list of tasks required for a new arrival to onboard.

The Onboarding Issue is massive, it contains **over 390 tasks** (don't believe me? here's [the template](https://gitlab.com/gitlab-com/people-group/employment/blob/master/.gitlab/issue_templates/onboarding.md)). More than a third of those are for the new team member, they include things like creating passwords for the new accounts and introducing themselves to the team on Slack.

However, that most daunting onboarding task of all is called "getting familiar" with different sections of the [company handbook](https://about.gitlab.com/handbook/). The handbook is thousands of pages long. No one can read it all, and even if they did, it would have already changed a few hundred times by the time they were done.

Initially, I was incredulous that a handbook this large could be used effectively. But after so many of my questions were answered by a handbook link, I was convinced that it was the go-to text to check how the company works.

While onboarding, GitLab offers no hand-holding, each team member must drive their onboarding process themselves, on the other hand, there's no time limit (and no one checking if I finished each task).

The onboarding is the first taste of what work at GitLab is like all the time: it is self-driven and independent... and it involves a lot of reading.

## Onboarding done, let's start working on some issues

Different engineering teams organize themselves a bit differently, but typically the engineering manager distributes work in the form of issues amongst their reports. As an engineering newcomer, I got assigned a couple of issues to get started.

In the Monitor team, we not only have to set up our own working GitLab environment using the GitLab development toolkit but also set up a cluster to mock metrics, which was not easy at first, especially as I was not yet familiar with Kubernetes. As I started engineering work, I was helped by a great onboarding buddy during this setup phase.

The buddy's role is also super valuable to navigate the project code, getting to know where this or that utility is, and understanding how "GitLab the Product" works from the inside. And, spoiler alert, many of the answers included *more* links to the handbook.

Of course, most of the initial time was spent reading the GitLab code, before writing much at all.

## Getting work done

Ok, I was ready to put some code into GitLab, right? Wrong. Getting code into GitLab *is* hard.

First of all, the code submissions must pass the CI/CD pipeline, a pipeline with thousands of automated checks, which check many aspects of the code, such as coding style, submission structure, unit and integration tests, and some end-to-end tests. Having my pipelines pass consistently was difficult.

Second, my changes must get at least 2 other people who must approve the code: one reviewer and one maintainer. This number can double if the change includes both backend and frontend, with one reviewer and one maintainer for each. On top of this, it is recommended that a UX team member checks and approves UI changes.

Up to 5 people approve my code before it can get added to the project. Even the Gitlab Bot gets to voice its opinion.

Initially, I found myself impatiently waiting on reviews, both automated and manual and this was one of my sources of frustration, the upshot of this is that there is a jolt of pure joy whenever I get some code approved in merged. 

Only until recently I can have a more accurate idea of how long it will take for a change I made to get merged into the code. During my 3 month tenure, I have gotten around 22 merge requests merged into the project, each with lots of comments and improvements.

## GitLab, not just about remote

My remote setup is something that came up often when I told friends and family about my new job. Lots can be said of learning to work remotely, and I have found lots of information about how working remotely is different.

Although all-remote is a big part of what makes working at GitLab unique, I think this is not the only thing that makes this company is special. I think there is more to the way the company works that makes this special.

### Working in the open

In my role at GitLab, most of my work is public. What I am doing is not only available to all the members of the company, it is made available to anyone: meetings I join are made public in YouTube videos, discussions are accessible on Gitlab.com, and my code reviews are *all* public (yikes!).

I have a lot of conversations daily at our internal Slack but is mostly casual communication or pings with links to the "serious" job stuff that is there for everyone to see. 

I try to keep in mind I have to be very clear, concise and remember I can reach a wide audience in all my work. Writing like this is hard work, but it has a positive influence on how I communicate.

### Agency and authority

In GitLab I can suggest a change to the company rules, via the handbook, and if a few team members agree with me, I will change the way the company at large works. A few of my contributions made it into the handbook in the first few days.

This is empowering, my contributions are valued, not only to topics directly related to my job, but I can also have a contribution to the company culture and processes.

### Team growth

Gitlab has doubled in size since I first applied earlier this year. About half of the team members I have talked to have been in the company less that year.

I think there is some nostalgia about the time where everyone would know everyone else at GitLab. Like a large town that turns into a city, in a GitLab with over 1000 employees, it's not possible anymore to know *everyone* by name, the amount of information flowing is too big to follow and since everything is public, is hard to filter out what is important or relevant on daily basis.

That said, this makes the work environment very dynamic and I can tell there is an active effort from the part of everyone to integrate into the company culture and I can see it in many of our conversations.

## Some other quirks

### Notifications

GitLab is global and active all the time. Every day I wake up to find emails and communication that occurred during the night.

I find I need healthier habits to keep focus, like disabling notifications for my work email account or Slack, not only when off-work but at work as well.

### Emojis

Emojis are everywhere at GitLab! Initially, I found it a bit odd, but there is underlying usefulness: we communicate often via text, so emojis can help convey intentions and nuances that are hard to express with plan text.

### Coffee chats

If I want to talk to anyone in the company I can schedule 30 minutes of "coffee chats" with anyone. The scheduling usually has to be done a bit in advance, but it's always a fun talk and I must admit I don't schedule enough of them.

## Career plan

There you have it, this was a general summary of my first few months at GitLab.

Now that the first few months are done and I can get a task done from start to finish, I am ready to think about what's coming next.

Roughly speaking, GitLab offers two tracks, a technical track, and a managerial track. I still have to think more about what I want from my career at GitLab, and this discussion will occur in the coming months and is in active development.
