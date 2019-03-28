---
layout: post
title: Flutter for Web Developers
subtitle: Concepts for WebApp devs to understand Flutter
share-img: "/img/posts/flutter-web-developers/flutter-logo-img.jpg"
---
I have spent the last few months learning and working with Flutter, the framework to create mobile apps. I have to say I am very impressed with the framework and would like to see it in action in a large project.

Coming from a "for the browser" web development background, I found a bit confusing to initially understand what the framework was all about, so I try to explain its differences from regular web development.

<img src="/img/posts/flutter-web-developers/home-demo-app.png" style="max-width: 300px;">
{:class="text-center"}

*First Demo App*
{:class="text-center"}

### Flutter renders everything

Flutter makes use of [Skia](https://skia.org/dev/flutter) to render each element of the application on a canvas, there is no rendering of components done by the operating system or a WebView. This means that *everything* that is presented in the screen *is* a Flutter Widget.

Applications built with Flutter only "look" native becuase of the way their widgets are displayed on the canvas. The [Material](https://flutter.dev/docs/development/ui/widgets/material) (Android look and feel) and [Cupertino](https://flutter.dev/docs/development/ui/widgets/cupertino) (iOS look and feel) widget libraries provided by Flutter are simulating the respective native mobile experiences.

App developers and designers that want to continue to provide a raw native experience will have rely on updates by Flutter contibutors whenever there are updates in the apperance of the native mobile operating systems. However, Flutter is betting that app teams want to create more unique looking apps that are not identical to their respective OS look and feel.

This comes with the advantage that there is no "bridge" (such as React Native's bridge between JavaScript and Native OS components) or "gap" (such as the WebView in PhoneGap) between realms of compoenents and this leads to major performance gains, such as smooth animations at 60fps.

### Flutter's styles are... "inline" styles

As in Flutter everything is a widget, including containers and style elements, which in typical WebApps would exist only as CSS. Each widget defines the shape and look-and-feel from its properties.

Presentation and business logic get mixed 😱.

It feels like having inline CSS (`widget properties`) in the markup (`widgets`) of the application, which is something that still goes against my instincts, and feel like it could lead to hard-to-read-code over time. I still find it tedious scroll through the documentation of a widget in order to find the right way to get a particular look and feel, which seems awkward compared to a CSS approach.

Styles don't "cascade", I consider this a problem for big applications, as the risk of creating a spaghetti application is increased. However, a good knowledge of OOP will come handy, as styles can be *inherited* and *composed* by the widget system using Dart's `superclasses` and `mixins`.

Having said this, Wm Leler [explains convincingly](https://hackernoon.com/whats-revolutionary-about-flutter-946915b09514) why the layout was *turned on its head* and what this means for applications (TL;DR performance) so I think I can make the effort to adapt.

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
*App Boilerplate code, is like markup, but not.*

In my opinion, Dart is a happy middle ground between Java and JavaScript, and I very much enjoy how it feels natural for me to code it. I consider `types` and `classes` very useful in large projects anyway and there is no need for extra libraries, plugin installs or transpailers to use the full features of documentation and language.

In Dart and Flutter, each Widget (any app element) is implemented as a `class`, so unit testing of Widgets is very natural and TDD (test driven development) can easily become part of the everyday workflow for all of the parts of the app.

I have used VS Code to create Flutter projects and it has a great [support via plugins](https://github.com/Dart-Code/Dart-Code).

### Tips & Bottom-line

Flutter made me **excited** about mobile development once again!

If the same happens to you, I have some tips for Web Developers that are looking into Flutter:

- If you are coming from a pure Front-end background, I recommend reviewing on object oriented programming concepts before diving too deep into the framework. Understanding of OOP will make it easier to build and maintain Dart/Flutter code.
- Follow a structured course which introduces the new concepts step by step, otherwise the content online and documentation will be overwhelming. I recommend Udemy courses to get started.
- Setup your VSCode to work with Dart, it can make going through the Widgets documentation much faster.

My next step will be to look at how themes can help me style apps, and how to use this to create generic component libraries. I will also go deeper into use of native mobile device APIs.

#### Resources

- [Dart's official language tour](https://www.dartlang.org/guides/language/language-tour)
- [Udemy course "Dart and Flutter: The Complete Developer's Guide"](https://www.udemy.com/dart-and-flutter-the-complete-developers-guide/)
- [What’s Revolutionary about Flutter
 by Wm Leler](https://hackernoon.com/whats-revolutionary-about-flutter-946915b09514)
- [Skia Graphics Library](https://skia.org/)
- [Hummingbird: experimental rendering of Flutter for the Web](https://medium.com/flutter-io/hummingbird-building-flutter-for-the-web-e687c2a023a8)