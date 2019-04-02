---
layout: page
title: Pulsar Reporting
share-img: "/img/pages/reporting-ui-home.png"
---
Pulsar Reporting UI
===================

Pulsar is an open-source solution for your team to do analysis of real-time events streams, it can be used for web analytics, monitoring of events on infrastructure and similar applications. 

The **Pulsar Reporting UI** is a reporting solution that allows your team to visualize your events and traffic in real-time. It allows both developers and final users to build customized dashboards and visualizations.

See the [Github repository for setup](https://github.com/miguelrincon/pulsar-reporting-ui).

### See: Pulsar Reporting announcement in the [ebay Tech Blog](https://www.ebayinc.com/stories/blogs/tech/announcing-pulsar-reporting-near-real-time-metrics-reporting-framework/)!

Pulsar Reporting UI is built on AngularJS. Users can create visualizations using a point-and-click interfaces and developers to create visualizations by using lower-level Pulsar components.

Full documentation for development is at [Pulsar Reporting JS Docs](https://miguelrincon.github.io/pulsar-reporting-ui/#/api).

## Features & Screenshots

- Time bound and Real-time visualizations
- Dimension vs. Metric visualizations
- Display of widgets which display fetched data

**Out-of-the-box dashboard**

![Dashboard](/img/pages/reporting-ui-home.png)

**Real-time data flow (Trend Today)**

![Details](/img/pages/reporting-ui-home-detail.png)

### Number of visitors example (segregated by source)

![Sessions by source](/img/pages/reporting-ui-sessions.png)

**Sessions filtering by source**

![Sessions one source](/img/pages/reporting-ui-sessions-filtered.png)

### Custom Dashboards creation and updating

- Creation of dashboards by grouping widgets programatically
- Creation of dashboards from the UI for non-experts users
- Administrative capabilities to manage users and access

![Dashboard Create](/img/pages/reporting-ui-custom-dashboard-create.png)

![Dashboard Edit](/img/pages/reporting-ui-custom-dashboard-edit.png)

## Learn more

- My fork of the [Pulsar Front-end Repository](https://github.com/miguelrincon/pulsar-reporting-ui)
- Pulsar Reporting UI depends on the [Pulsar Reporting API](https://github.com/pulsarIO/pulsar-reporting-api).
- See the original whitepaper [Pulsar – Real-time Analytics at Scale (PDF download)](https://github.com/pulsarIO/realtime-analytics/wiki/documents/Whitepaper_Pulsar_Real-timeAnalyticsatScale.pdf)
- Technologies used: [AngularJS](https://angularjs.org/), [NVD3](http://nvd3.org/), [Bootstrap](https://getbootstrap.com), [Admin LTE](https://adminlte.io/).
