---
layout: post
title: Front-end Frameworks in 2018
subtitle: Presentation to corporate users
---

In my role as Web Architect I was asked to compare JavaScript front-end frameworks. I wanted to help my team select one framework that was going to be used for most new projects, which exist in different teams, environments and costs ranges.

The criteria I chose was not necessarily only technical, but meant to help our company adapt to a new market of technologies, which had stalled in the recent months due to aa case of organizational "analysis paralysis".

I wanted to select a single framework, which different teams could use, so we could share knowledge and experts, collaborate more, and create more "synergy" by using the same base technology.

I presented my findings to colleagues and management during a workshop. Below are some of my ideas:

## The competitors

There are three main competitors for the position of "popular" JS frameworks, while there is not a single one which is a single "winner", we should select one which can help us achieve our business goals in most cases.

3 are obvious competitors: Angular, React, VueJS.

### Angular

Angular, currently version 5, is the "new" Angular framework, with versions 2+, needs to be distinguished from the "old" AngularJS framework with versions 1.x. After some experimentation, no clear upgrade path was defined by AngularJS 1.x to Angular 2+, which means no migration should be done for older projects in most cases.

Angular receives most of its support and financing from Google, and Google teams make most of the steering of the project.

The framework is designed to be a "full-package" solution in which, the framework makes many choices for the developer and comes with many of its functionality out-of-the-box. This can help make projects more uniform and standardized.

Anecdotally, it has less buzz in media than other JS frameworks and tools, the "community" is mostly composed of internal users which are sponsored to support the framework.

Google, apparently, didn't eat its own dog food. Their main products still use Google's Closure (e.g. Gmail).

### React

When using the metaphor of "the cathedral and the bazaar", clearly React is a bustling bazaar of libraries, plugins and ideas.

The framework creators have not pushed a deliberate way to build a "React" app, which helps keep it flexible. The downside is that this may introduce some fatigue, developers must spend a lot of energy choosing, changing and adapting when using a new library, the flexibility comes at a cost.

Facebook, the original creator of React, switched from the confusing "BSD + Patents" license to the MIT license to the relief of corporate users, which were concerned that the patents of some of their products might be lost to Facebook be introducing React to their stack.

Large applications built in React might suffer from tight-coupling, so solutions such as Redux and functional programming are used to solve them. This comes a the cost of using higher level of abstraction when building functionality that could be more simple.

### VueJS

Vue 2.0 was released in September 2016, which is the stable development version.

Unlike the two previous competitors, it is not funded by a large corporation, and it is partly crowdfunded. The community offers grassroots support to it.

It is fast growing as an alternative tools internationally, however, since its creator, Evan You, is from China, it is also popular and relevant inside China, which can be an advantage when finding development talent in the country.

Additionally as an example, Laravel, one of the popular new PHP framework bundle VueJS by default as part of their core build, as they make use of VueJS to do part of the presentational logic.

VueJS does not offer a complete landscape solution for mobile apps. Unlike React and Angular, a fractioned mobile offer might represent more difficulty when creating mobile apps.

As an advantage, the framework can be used to "progressively" rewrite applications built in older generation frameworks. It can be used to refactor older "jQuery mess" type of web interfaces.

**I also want to mention 2 technologies that may help our development efforts in the near future.**

### Honorable Mention: GraphQL

In GraphSQL the API definition is not based on REST, it instead, defines APIs via types "Queries" and "Schemas" of objects travelling through the network which are composed of several basic types and its compositions: (Object, Int, Boolean, ...)

Once an "Schema" is agreed upon it can be used to generate programmatically client and server code.

It uses two main kinds of query, which are use to fulfill get role of the HTTP verbs called: via ExecuteQuery (replacing GET) and ExecuteMutation (replacing POST, PUT, DELETE).

GraphQL helps solving "silly" discussions around hos to map relationships between objects, which in REST is never obvious choice (see n+1 problem). This helps building more straight forward front-end code which decides which entity and fields to show and in relation to which other entities. As the our applications grow more complex, the number relationships between data will grow, and this is.

GraphQL also promises allows for a gradual "evolution" of APIs.

*Why mention it here?* Using or not GraphQL has an impact in the way we architect our front-end (and back-end). It challenges some assumptions about how "state" is maintained in the front-end applications.

### Honorable Mention: Storybook

Storybook is a way to do separate component testing and development outside of the application.

While I haven't used storybook in a project, I think it can be a powerful tool when separating concerns of "components" and "modules" of our front-end end application.

It allows to test and use "stateless" components independently from each other and from the larger application. Any business user is able to check the look and feel of the app pieces even before their are integrated and built.

*Why mention it here?* Storybook is compatible with the major frameworks discussed here. Regardless of which framework is chosen, making stateless means making them reusable. This has an impact on how teams might approach building their UIs and how projects are organized, specially on complex front-end projects.

## JavaScript in 2017

The 2017 state of JS gave me insights into the market and usage trends for the frameworks we are discussing.

While I don't normally use the number of stars and questions on StackOverflow as an indicator of which tools I should use it does have major impact in the corporate world: **hiring**.

When building teams of developers in a fast paced environment, such as China (with a high turn-over rate and short deadlines), skills of each individual contributor should align to the needs of the project at hand as fast as possible, and popular frameworks allow shorter training periods hiring.

Below a figure of the usage and intention of usage of different frameworks globally:

![JS Framework Popularity contest](/img/posts/front-end-frameworks/popularity-contest.png)

With VueJS and Angular 2 growing, and React getting stablished we see a similar trend in StackOverflow:

![JS Framework Popularity contest](/img/posts/front-end-frameworks/stackoverflow-question-tags.png)

...
