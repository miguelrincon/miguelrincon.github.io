---
layout: post
page-title: My first 3 months in GitLab
title: Node script to export GitLab issues to CSV
subtitle: Looking back at my first 3 months in GitLab
---

I have worked in GitLab for a [more than 3 months](/2019-07-27-new-gitlabber/) as a [Frontend Engineer](/) and former colleagues and friends have expressed curiosity about what it's like to work at GitLab.

I think is important to check-in on my work and professional life for these past months, and say something about my experience working in this magical company that has no offices.

## Day 1: Here's 300+ things for you to do

In GitLab parlance, an *issue* is generally a task or assignment which should be done by someone in the team. On day one, the GitLab People ops team, our HR, has already prepared an **Onboarding Issue** for each team member, which contains the list of tasks required for a new arrival to onboard.

The Onboarding Issue is massive, it contains **over 390 tasks** (don't believe me? here's [the template](https://gitlab.com/gitlab-com/people-group/employment/blob/master/.gitlab/issue_templates/onboarding.md)). More than a third of those are for the new team member, they include things like creating passwords for the new accounts and introducing themselves to the team on Slack.

However, that most daunting onboarding task of all, is called "getting familiar" with different sections of the [company handbook](https://about.gitlab.com/handbook/). The handbook is thousands of pages long, is constantly changing and everyone can suggest changes to it. Is not possible for anyone to read it completly, and even if they did, it would have already changed a few hundred times by the time they were done.

Initially, I was incredulous that a handbook this large could be used effectively. But after so many of my questions were answered by a number of handbook links, I was convinced that it was the go-to text to check how the different teams and the company work.

On one hand GitLab offers no hand-holding, each team member must drive their own onboarding process themselves, on the other hand there's no time limit (and no one checking if actually finished each task). The onboarding is the first taste of what work at GitLab is like all the time: it is self-driven and independent... and it involves a lot of reading.

## Onboarding done, let's start working on some issues

Different engineering teams organize themselves a bit differently, but typically the engineering manager distributes work in the form of issues amongst their reports. As an engineering newcomer I got assigned a couple of issues to get started.

In the Monitor team, we not only have to setup our own working GitLab environment using the GitLab development toolkit, but also setup a Kubernentes cluster, which was not easy at first, especially as I was not yet familiar with Kubernentes. As I started engineering work, I was helped by an onboarding buddy during a lot of this setup phase.

The buddy's role is also valuable to navigate the project code, getting to know where this or that utility is, and understanding how "GitLab the Product" works from the inside. And, spoiler alert, many of the answers included *more* links to the handbook. 

Of course, most of the initial time was spent reading the GitLab code, before writing much at all.

## Getting work done

Ok, I was ready to put some code into GitLab, right? Wrong. Getting code into GitLab *is* hard.

First of all, the code changes cannot break the CI/CD pipeline, and this pipline contains thousands of automated tests, which check many aspects of the code, coding style, unit and integration tests and some end-to-end tests. At least initally having my piplines pass consistently was difficult.

Second, in order my changes into GitLab at least 2 other people must approve the code: one reviewer and one maintainer. This number can double if the change includes both backend and frontend, with one reveiwer and one maintainer for each. On top of this, it is recommended that a UX team member checks and approved UI changes.

So, in some cases up to 5 people should approve my code before it can get added to the project. Even the Gitlab Bot gets to voice its opinion.

Initially I found myself impatiently waiting on reviews,both automated and manual, and only until recently I can have a more accurate idea of how long it will take for a change I made to get merged into the code. 

During my 3 month tenure I have gotten around 22 merge requests merged, in which each of them has been thouroughly reviewed. The upshot of this is that there is a genuiune jolt of joy whenver I get some code approved in merged. 

### Using the travel grant, a lot?!

Meeting colleagues is encouraged like in no other company I have worked in. This has encouraged me to meet more colleagues than I would otherwise have not done.

### Working anywhere... does mean working anywhere

Working in cafes was a bit uncomforatable at first, but I got used to it. I still think the environment of an office is conducive to productive work, as long as there are no interruptions.

Some other things that can be done remote, like learning languages.

I wake up to find emails and communication that occurred durign the night, and notification can come at anytime. So it is important to keep a healthier habit of checking my phone only at the right times.

For example, I just disabled the notifications on my phone for my work Gmail account, which would be distracting at time where i wanted to rest.

## GitLab, beyond remote

I moved to China about 10 years ago, and my love for both my country and China put my in a difficult position. My worlds will always be in opposite positions of the globe.

The point of working for GitLab is that... remote is not the point.

When I talk to firends and family about my new job, some of them are incredoulous that it is possible to have a job this way.

It is my first remote job, and now remote will be my first choice, not only for work, but for other activities.

Although, remote is a big part of what make working at GitLab unique, that is not the only part. We could possibly work remotely and follow the same rules.

### Working in the open, ~90% of the time

The first open-source project is worked on full-time, has us working behind closed doors until the first public unveiling, with most of the important dicussions and decistions ocurring in our internal Jira and in meetings in person.

Working in GitLab is working in public, many of our meetings are recorded, our most important discussions, and most of my work happens publicly for the world to see. This is not something that "any" remote company does. This is something that is very GitLab specific.

We have an internal slack where some private discussions occur, but most of them simply invovle copy pasting links to a public dicussion in our issue tracker or merge request discussion.

It also mean we we must try to always put our best foot forward, my colleague sais we should keep it 

### Team growth

Gitlab has doubled in size since I first applied to work here earlier this year. I would say that about half the team members I interact with have been in the company less that year.

GitLab's older team members seems to be know by everyone, us newbie don't have the same street cred.

## Some GitLab other quiks

### Emojis

Emjos are heaviliy used by many of our team mebers, initially I found it simply playful, but there is an underlying of usefulness: as our main way to communicate if via text, it can be hard to judge from somone's tone, and emojis help to commiunicate more smoothly and clearly.

### Coffe chats

I am always surprised at the effrot of many team members put into joining you for coffee, in the end this is always possible.

### Unlimited time-off

Does working more get more things done? I would pretty much agree with this, but that no matter if you are inteh office or not, you will get the same amount of work done.

## Moving forward

I have gotten the hang of a few aspects of my job, the most important one being, how to get code into the codebase, there are some things I will need to explore moving forward.

Thinking about my career development in the companym offering a more technical track or a more managerial track. At the moment I feel more inclined to 

Joining a working group, as a possible improvement to help improve something that affacts several team members.
