---
layout: post
author: someone
title:  "JavaScript Going Further Native: NativeScript"
date:   2017-07-31
tags: [JavaScript Conference, JSConf, NativeScript]
category: [Article]
front-image: /assets/posts/Miguel2.jpg
---
*Our front-end team at MCON attended the 2017 JavaScript Conference (abbr. JSConf), a two-day developer driven summit where both local and international JS community share the latest tools and techniques for JavaScript development.  It was a great chance to learn from and participate in the vibrant community of JS developers in China.*

## The Problem of Developing for Android and iOS
Development of mobile apps is mostly split in two platforms, with development for iOS and Android. They are mutually exclusive. This has meant that, historically, companies must choose one platform over the other, or spend many resources maintaining both technologies, with separate development teams for both platforms.

Instead of paying huge efforts, teams can deliver their applications as web apps but losing on part of the mobile experience without having to choose: to be on iOS or to be on Android. In fact, this technique was applied in the real world already, by bundling all the code of the web application as an app that gets downloaded from a mobile application store. This type of apps are called “hybrid apps” and several technologies (such as Phonegap and Cordova) have tackled this problem with different approaches. A hybrid app works similar to a web app but it makes possible to deliver the same experience for Android and iOS, allowing teams to create one single app, which can be released to both platforms.

Hybrid apps typically are displayed in a “web view”, which is similar to seeing the app in a mobile browser. This can, in some older phones, make the apps less responsive than native apps, and have a different look and feel when compared to a native app equivalent, which some users will see as negative. By creating all the app experience in the web view, the app is restricted from some capabilities of the device (such as geolocation, Bluetooth, network detection, etc.…) so it is needed to create custom code which wraps around the functions for each kind of platform.

This development is not as smooth as promised, bugs can appear in one single platform on a certain version, so the promise to “build once run everywhere” sometimes could be translated as “build once debug everywhere”. Testing costs roar up. Needless to say the effort to build and release. In light of this issue for the new version of Angular, NativeScript is a hope. According to Ryan Chen, Engineering Manager of Chromecast and Home at Google, this scenario of keeping both platforms will no longer scratch or bite developers.

## What Can NativeScript Fulfill?
Once an Angular application is built, NativeScript uses the internal platforms rendering engine. The menus, pop-ups, and all other elements that are shown from a native app, will gain speed and look lighter.

The app will behave and feel more like an app made using iOS or Android development tools, below is an example for the same code rendering to each platform:
<br>
![mobiles-miguel.jpg](/assets/posts/mobiles-miguel.jpg)
<br>*(To know more about NativeScript examples: https://docs.nativescript.org/ui/components#dialogs)*<br>

## Will NativeScript Penetrate the Market as a New Product?
When using NativeScript, code is written in Typescript to develop the apps, which means that code is easier to trace in between files and projects. This drives effective collaboration specifically in legacy code handling in large teams. Thanks to Typescript, the code is self-documenting and has checks during build-time to remove possible errors.
<br>*(To learn more about apache: https://www.apache.org/legal/resolved.html#category-x)*<br>

React is clearly a more popular choice for many of the developers in the conference. However many agree that you should evaluate pros and cons of your choice of framework, whichever it may be. SAP chose NativeScript to create their Enterprise App Modeler, which accredits NativeScript to be more corporate friendly.

Finally, NativeScript comes with no strings attached in terms of licensing. It is of vital importance when compared to its biggest competitor, React Native, due to their Facebook BSD+Patents license. The Apache Foundation, has disavowed the use of React due to concerns about their patent clause controversy.

We at MCON are excited with this technology. With a strong “batteries included” approach, the NativeScript will make a powerful proposition for moving a Native applications to modern Front End development on mobile. It will evidently fill in a gap for both Hybrid Apps and Progressive Web App and bring Angular and JavaScript developers closer to the Mobile world.