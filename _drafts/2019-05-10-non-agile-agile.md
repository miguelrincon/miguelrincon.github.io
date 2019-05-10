---
layout: post
page-title: Agile software development with a corporation
title: Non-agile Agile development
subtitle: Disguise an Agile project as a waterfall one
---

I have worked for about a year for one of the key customers of our Shanghai branch, and even though there have been difficult periods, I consider it a success story of Agile development.

Much like a sturdy dandelion, our project is a successful Agile project in an environment that was not friendly to iterative development.

Also, much like our dandelion, our project's beauty cannot be compared to one of the other projects with more resources or which exist in a more "product-oriented" environment, in which time-and-materials billing is the norm. This is typically present in startups and internal teams... however, our users are satisfied, and our customer respects us and keeps working with us.

## The challenge

We have a Party A - Party B relationship with our client, so we play by their rules.

Our customer is not interested in software technicalities, and more importantly, is not interested in understanding continuous delivery, or even best practices for gradual improvements. *And I don't blame them!* According to their internal rules, any large expenditures in IT must be approved by their purchasing department, a department that is even less interested in the internals of the project.

They **must** view the project as a typical waterfall, with a fixed deadline and little interest in "useless" intermediate releases.

So, our business model and relationship with the customer doesn't allow for us to easily charge how our customer will work (they are a large corporation), all of this means that we must:

1. Create budgets in advance with fixed scopes and deliverables, and assume the risk of delivering a low-quality software, or going over budget if taking longer than expected.
2. Have a timeline in advance for most deliverables of the project: this is not quite compatible with the most orthodox agile approach.
3. Keep internal improvements "to ourselves", only the most disrupting internal technical improvements (e.g switch major versions of frameworks) are allowed in the budget. Our customer would typically not pay for changes which are not "customer-facing".

## Strategy

We have had a long collaboration with the customer, which allows us to keep a protected position compared to other competitors.

Over the years, we found that breaking projects into pieces worked, even at the purchasing level.

### Make a minimum viable... project?

We often spend time with the customer, understanding their pain points and ideas for the upcoming project. We collaborate closely with them in drafting a plan on what the future projects are like... we know Agile so we know that **a project can be many projects**.

Even before the bidding process starts, we are able to split our project into in phases, each with their own cycle of delivery and plan (sounds like agile?). Certainly, we don't get to have a billed project as small a single iteration, but we do get close. For a typical iteration of 2 weeks, we typically have a "project" of typically 4-8 iterations (4 months).

If we identify that the project is larger than that, we often advise to split it, or at least create different work packages for each component of the application which can be invoiced separately.

## Tactics

### Our Team

Our team consists of 5 people with relatively well-defined roles:

- 2 back-end developers
- 1 front-end developer
- 1 account manager & business analyst
- 1 project management officer & occasional exploratory tester
- 1 release manager and scrum master (me)

### Our issue tracker

Our de-facto project management tool is Gitlab. This was not a calculated choice, but the result of having it already available to push Issues and improvements.

I don't think the Gitlab issue tracker is the true reason for the success of the Agile setup, but it does help to reduce some of the fraction of tool switching and quick backlog refinement and issue tracking that lives in the same place as our repository.

#### Tags and lists

#### Iteration/Milestones

#### Task flow and pipeline

#### Environments and our code

## More on strategy

## Learning & principles

....

## No matter what setup, agile's foundation is automated testing

Without a question, the only reason we are able to maintain a stable release cycle of 2 weeks, it the team discipline, (mostly driven by the developers!) of keeping an up to date suite of unit and black-box integration tests (Selenium based).
