---
layout: page
page-title: Front-end Developer Interview Questions and Answers
title: Front-end Interview Questions
---

Use these reference questions and answers for front-end development, these are mostly one-off questions that can be asked in quick succession. Some of them are "trivia" so please don't use them as a final truth on someone's ability, these should be only one data point in an overall evaluation.

**Learn more about [my interview kit](/pages/miguels-interview-kit/).**

These Q&A were *updated for April 2019*.

* This will become a table of contents (this text will be scraped).
{:toc}

# JavaScript Questions

## What's the difference between .map and .forEach?

`forEach()` executes a function once for each array element. `forEach()` doesn't return any value. `forEach()` makes it possible to alter the current array by using the index passed to it

`map()` **Creates a new array** with the results of calling a provided function on every element in the calling array. `map` is more useful for functional programming.

[forEach vs map Source](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)

## Does JavaScript pass by value or by reference?

In JavaScript arguments are passed to functions by value, in the case of primitives this is very obvious, as changes to the arguments are not reflected globally or in the calling function.

However, references to objects are values **too**, so objects that are sent to a function may be changed internally by the called function.

> The parameters of a function call are the function's *arguments*. Arguments are passed to functions by value. If the function changes the value of an argument, this change is not reflected globally or in the calling function. However, object references are values, too, and they are special: if the function changes the referred object's properties, that change is visible outside the function (...)

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#Description

## Explain "this"

`this` is a special keyword that refers to the context of the execution of a function.

`this` may have different values depending on how a function is called, `this` can be:

- The "global" context (`window` in browsers, `global` in node)
- The instance of the new object, when the function is called with `new`.
- The instance of the parent/invoker object, when called as a method.
- Another value... when using especial functions to call a function such as `.call`, `.apply`, `.bind`.

**Note:** In strict mode, inside a function called from the global context, the value of `this` is `undefined`.

[Source in MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)
[In-depth article](https://medium.com/quick-code/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8)

## Difference between .call, .apply, .bind?

.call, apply, .bind are all methods of functions, and they are ways to call functions manipulating their references (bindings) to `this`.

```js
// Goal: get an object to be `this` in our function
thisArg = { /* ... */ } // some object

function myFunction(a, b, c) { /* refere to this... */ }
```

.call will call the function wit ha given context and the remaining arguments.

```js
// .call
myFunction.call(thisArg, 1, 2, 3)
```

.apply will call the function wit ha given context and the remaining arguments in an array format.

```js
// .apply
myFunction.apply(thisArg, [1, 2, 3])
```

.bind will create a new function that is *bound* to a given thisArg.

```js
// .bind
boundFunc = myFunction.bind(thisArg)
bundFunc(1, 2, 3)
```

## What is a closure? What is hoisting?

A closure is a combination of a function and the lexical environment (lexical scope) in which the function was declared.

In other words, a closure is a combination of a function body, and some data, that it is stored accessible to it.

Each closure has access to 3 scopes:

- Local Scope (Own scope)
- Outer Functions Scope
- Global Scope

Hoisting means that variable and function declarations are allocated in memory during the `compile phase`. More practically one can think of variable and function declarations moved to the top of functions.

[MDN Article on closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

## How to inherit an object from another object's prototype?

You can set an object as a prototype of another object.

```js
// Our "super" class
let parent = {
  commonFunction: function(){
    console.log('I can do general stuff.');
  }
}

// Alternative 1: use Object.create
let child = Object.create(parent, {
  myFunction: {
    value: function () {
        console.log('I can do specific stuff.');
    }
  }
})

// Alternative 2: use Object.setPrototypeOf
let child = {
  myFunction: function () {
      console.log('I can do specific stuff.');
  }
}
Object.setPrototypeOf(child, parent)
```

## What's the call stack? What is the event loop?

In JS, the Call Stack is a data structure that records the function calls in a script. A layer is added to the stack every time a function is invoked.

Since JavaScript is single-threaded, it has a single stack.

The Event Loop is a... loop, which processes messages from the Event Queue, so that when an event is added to the queue.

[Cool Gist](https://gist.github.com/jesstelford/9a35d20a2aa044df8bf241e00d7bc2d0)

## What would be a reason to use ES6 classes?

It mostly helps to use the prototypical inheritance of JS in a way that is more natural and easy to read.

- It provides an alternative to constructor functions.
- It helps to setup inheritance chains via the `extends` keyword more easily than by using `.prototype`.
- Allows to use of `super.myMethod` which is easier than `ParentConstructor.prototype.method.call(this)`.

[Discussion on SO](https://stackoverflow.com/questions/30783217/what-benefits-does-es2015-es6-class-syntax-provide)

## How to create Class methods (object.prototype)?

First, create a "class" with a constructor function. Then add the method to its prototype.

```js
var Person = function(first, last) {
    if (!(this instanceof Person)) {
        throw new Error("Person is a constructor function, use new with it");
    }
    this.first = first;
    this.last = last;
};

Person.prototype.personMethod = function() {
    // ...
};
```

## A function that references or binds to the `this` keyword, i.e. in an onclick event.

Make `this` be attached to function as needed:

```html
<button id='btn1'>Button 1</button>
<button id='btn2'>Button 2</button>

<script>
  (function () {
    // Show the content of clicked element.
    let showButtonContent = function (e) {
      e.stopPropagation();
      alert(this.innerHTML);
    }

    // Just a normal event handling
    let btn1 = document.getElementById("btn1");
    btn1.onclick = showButtonContent

    // Pretend is button 2 was clicked
    let btn2 = document.getElementById("btn2");
    // btn2 gets bound
    document.onclick = showButtonContent.bind(btn2)
  })()
</script>
```

## Explain event propagation and bubbling

**Event propagation** can be two things: Event capturing (not commonly used), and event bubbling.

**Event Bubbling**: When an event (most of them) happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

**Event Capturing**: In some cases is possible to "capture" events during their "capture phase", which occur before the bubbling phase.

[Bubbling & Capturing Article](https://javascript.info/bubbling-and-capturing)

## How to create a DOM element with vanilla JS?

By calling document.createElement(`tagName`). 

```js
let newDiv = document.createElement('div')
```

Append it:
```js
let newDiv = document.createElement("div");
newDiv.innerHTML = "Page content";
document.body.appendChild(newDiv);
```

[MDN createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

## What are some major differences between ES5 and ES6

Syntax differences
- Arrow Function `() => expr;`
- Extract values `let {a, b} = obj;`
- Spread operator `var copyObj1 = (...obj1)`
- `Promise` class
- `export default a` and `import a from './file'`
- let, const
- template literal `${n} of ${total}`

# CSS/Style

## Difference between inline, inline-block, block elements?

All HTML elements are rectangular boxed. CSS allows the developer to manipulate how the rectangular boxes interact with each other.

```css
display: inline;
```
`inline`: makes elements flow as they would inside text. margin and padding will push other elements horizontally. heigh and width are ignored.

```css
display: inline-block;
```
`inline-block`: Unlike inline, it allows to set a height and width, and the element will still flow with the test.

```css
display: block;
```
`block`: Block elements break lines after and before them.

Other display values allow more flexible control, such as: `flex`, `grid`, `table`.

["display" in CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)

## How to select the first children of an element? How to select odd children elements?

CSS3 defined "structural pseudo-class" selectors. Given the HTML:

```html
<section class="grid">
  <article class="module">One</article>
  <article class="module">Two</article>
  <article class="module">Three</article>
  <article class="module">Four</article>
  <article class="module">Five</article>
</section>
```
We can select the first child:
```
.module:first-child{ /* ... */ }
```
We can select odd children using the keyword `odd` or the formula `an+b`:
```
.module:nth-child(odd){ /* ... */ }
.module:nth-child(2n+1){ /* ... */ }
```
["nth-child" in CSS tricks](https://css-tricks.com/almanac/selectors/n/nth-child/)

## What does box-sizing: border-box do?


`box-sizing` has three possible values: `content-box`, `padding-box`, and `border-box`.

In `box-sizing: border-box` the width of the element includes the padding and borders.

`border-box` is useful when, for example, we want an element to have 100% width and stay that way in spite of borders or padding applied to it.

[CSS Tricks on Box Sizing](https://css-tricks.com/box-sizing/)

## Explain absolute/relative/fixed positioning.

CSS rules:
```css
position: fixed;
position: absolute;
position: relative;
```

`fixed` keeps the box in the same place relative to the viewport (browser window).

`absolute` keeps the box in the same place relative to the page or to the next parent element with relative (or absolute) `position`.

`relative` positions the element relative to itself by allowing to set properties such as `top`.

[CSS tricks post on "position"](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/)

# General Concepts

## What' the difference between HTTP GET and POST?

GET and POST are two types of HTTP requests. GET is idempotent and POST is meant to create (or manipulate) resources on the server.

***Bonus:** Why is GET sometimes considered to be sending parameters to the naked eye?*

The parameters in the URL can often be cached by proxies and other servers between the client and the destination server.

## Describe MVC

MVC is an architectural pattern that splits an application into three logical components: model, view, and controller.

The model is a representation of the data in the application, the view is the user interface of the application and the controller passes messages between the view and the model.

# Vue

## Can you explain Vue's reactivity?

Vue's Reactivity depends mainly on 2 facts:

1. `Object.defineProperty` allows objects to respond to changes and accesses to the values of their properties using `getters` and `setters`.
2. A Dep class can collect which dependencies are attached to a property so the Vue can notify of changes on the properties using an observer pattern.

When the value of a property is changed, the changes to the property are notified to the view.

[Video: Build a reactivity system in 15 minutes](https://www.vuemastery.com/courses/advanced-components/build-a-reactivity-system/)

## What is the Virtual DOM?

The DOM (Document Object Model) is a tree-like data structure that represents the HTML on a browser.

The virtual DOM is an abstraction of the DOM, which is cheap to update. The virtual DOM and the DOM can be synchronized less often than the virtual DOM gets updated.

[Vue's Virtual DOM article](https://medium.com/js-dojo/whats-the-deal-with-vue-s-virtual-dom-3ed4fc0dbb20)

# Found a mistake? Or want to make a suggestion?

Please help me by adding an [issue to my repository](https://github.com/miguelrincon/miguelrincon.github.io/issues).