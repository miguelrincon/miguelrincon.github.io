---
layout: post
title: Flutter for Web Developers 
subtitle: Concepts for WebApp devs to understand Flutter
share-img: "/img/posts/flutter-web-developers/home-demo-app.png"
---
I have spent the last few months learning and working with Flutter, the framework to create mobile apps. I have to say I am very impressed with the framework and would like to see it in action in a large project.

Coming from a "for the browser" web development background, I found a bit confusing to initially understand what the framework was all about, so I try to explain its differences from regular web development.

<img src="/img/posts/flutter-web-developers/home-demo-app.png" style="max-width: 300px;">
{:class="text-center"}

*First Demo App*
{:class="text-center"}

### Flutter renders everything

Flutter makes use of [Skia](https://skia.org/dev/flutter) to render each element of the application on a canvas, there is no rendering of components done by the operating system or a WebView. This means that *everything* that is presented in the screen *is* a Flutter Widget.

One downside is that applications only "look" native. The Material and Cupertino widget libraries provided by Flutter must be kept up to date for Flutter to continue to appear like the correct version of an app in newer versions of OS.

However, there is no "bridge" (such as React Native's bridge between JavaScript and Native components) or "gap" (such as the WebView in PhoneGap) between realms and this leads to performance gains.

### Flutter's styles are... "inline" styles

As in Flutter everything is a widget, including containers and style elements, which in typical WebApps would exist only as CSS. Each widget defines the shape and look-and-feel from its properties.

The presentation and business logic get mixed. 

It feels like having inline CSS (`widget properties`) in the markup (`widgets`) of the application, which is something that still goes against my instincts. I still find it tedious scroll through the documentation of a widget in order to find the right way to get a particular look and feel. 

Styles don't "cascade". I consider this a problem for big applications, as the risk of creating a spaghetti application is increases. However, a good knowledge of OOP will be needed, as styles can be *inherited* and *composed* by the widget system using Dart's `superclasses` and `mixins`.

Having said this, Wm Leler [explains convincingly]( https://hackernoon.com/whats-revolutionary-about-flutter-946915b09514) why the layout was *turned on its head* and what this means for applications (TL;DR performance).

### Dart Dart Dart

I am loving Dart! It is a very expressive, easy to use language, which is strongly typed "just the right way" to help me be productive.

```
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Welcome to Flutter'),
        ),
        body: Center(
          child: Text('Hello World'),
        ),
      ),
    );
  }
}
```
*App Boilerplate code, like markup, but not.*

Dart is a happy middle ground between Java and JavaScript, and I very much enjoy how it feels natural for me to code in it. Types are useful in large projects and there is no need for extra libraries as in the case of TypeScript.

As each Widget is implemented as a `class`, unit testing widgets is very natural and TDD (test driven development) can easily become part of the workflow.

Added bonus! It has a great [support by VS Code]( https://github.com/Dart-Code/Dart-Code)

### Tips & Bottom-line

Flutter made me excited about mobile development once again.

If the same happens to you, I have some tips for Web Developers that are looking into Flutter:

- If you are coming from a pure Front-end background I recommend reviewing on object oriented programming concepts before diving too deep into the code.
- Using a structured course, such as one in Udemy to get started, otherwise the content online will be overwhelming.
- Setup VSCode to work with Dart, it can make going through the Widgets documentation much faster.

My next steps will be to look at how themes can help me style apps, and how to use this to create generic component libraries. I will also go deeper into use of native mobile device APIs.

#### Resources

- [Dart's official language tour](https://www.dartlang.org/guides/language/language-tour)
- [Udemy course "Dart and Flutter: The Complete Developer's Guide"](https://www.udemy.com/dart-and-flutter-the-complete-developers-guide/)
- [What’s Revolutionary about Flutter
 by Wm Leler](https://hackernoon.com/whats-revolutionary-about-flutter-946915b09514)
- [Skia Graphics Library](https://skia.org/)
- [Hummingbird: experimental rendering of Flutter for the Web](https://medium.com/flutter-io/hummingbird-building-flutter-for-the-web-e687c2a023a8)