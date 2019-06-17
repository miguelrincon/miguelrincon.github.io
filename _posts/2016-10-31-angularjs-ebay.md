---
layout: page
page-title: AngularJS in eBay
title: AngularJS, eBay and Analytics
share-img: "/img/pages/reporting-ui-home.png"
excerpt_separator: <!--more-->
---

I am very proud of my work at eBay. While there, I worked on a project called Pulsar UI. It is similar to Google Analytics: it can show data for users to understand the traffic on eBay's multiple sites.

<!--more-->

## Front-end... in trouble?

When I joined the team to work on their UI, and AngularJS application. The UI team had a lot of trouble handling the state of the application. They had created a lot "spaghetti" code to keep track of what the user had done and what page should be displayed. It all came crashing down when a feature for "bookmarking" was needed and it was obvious it was impossible to implement.

## Refactoring

I created a demo in which I restructured the project around [UI Router](https://github.com/angular-ui/ui-router) and rebuilt much of the UI in a few weeks. Now, it was possible to add new pages (reports) easily and we even got to build a point and click dashboard creator.

This was exciting because I was able to help the team with their biggest bottleneck: the front-end, and the patterns I designed allowed for other team members to create new functionality in a few simple steps. Pulsar UI went from a callback mess, to become a dashboard framework with reusable components and views.

**Update:** Unfortunately eBay moved on for that project, but it is still around in the original [Github repository](https://github.com/pulsarIO/pulsar-reporting-ui) and published on my site [as a fork](/pages/pulsar-reporting-ui/).