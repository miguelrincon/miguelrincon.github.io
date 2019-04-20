---
layout: page
title: Miguel's Interview Kit
---

Interview coming up? Are you interviewing... bing interviewed? Use these reference questions and answers!

# JavaScript Questions

## What's the difference between .map and .forEach?

`forEach()` executes a function once for each array element. `forEach()` doesn't return any value. `forEach()` makes it possible to alter the current array by using the index passed to it

`map()` **Creates a new array** with the results of calling a provided function on every element in the calling array. `map` is more useful for functional programming.

[forEach vs map Source](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)

## Does JavaScript pass by value or by reference?

In JavaScript arguments are passed to functions by value, in the case of primitives this is very obvious, as changes to the argments are not reflected globally or in the calling function.

However, references to objects are values **too**, so objects that are sent to a function may be changes internally by the called function.

> The parameters of a function call are the function's *arguments*. Arguments are passed to functions by value. If the function changes the value of an argument, this change is not reflected globally or in the calling function. However, object references are values, too, and they are special: if the function changes the referred object's properties, that change is visible outside the function (...)

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#Description

## Explain "this"

`this` is a special keyword that refers to the context of execution of a function.

`this` may have different values depending on how a function is called, `this` can be:

- The "global" context (`window` in browsers, `global` in node)
- The instance of the new object, when the function is called with `new`.
- The instance of the parent/invoker object, when called as a method.
- Another value... when using especial functions to call a function such as `.call`, `.apply`, `.bind`.

**Note:** In strict mode, inside a function called from the global context, the value of `this` is `undefined`.

[Source in MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)
[In-depth article](https://medium.com/quick-code/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8)

## Difference between .call, .apply, .bind?

.call, apply, .bind are all methods of functions, and they are ways to call functions manipulating their refrences (bindings) to `this`.

```js
// Goal: get an object to be `this` in our function
thisArg = { /* ... */ } // some object

function myFunction(a, b, c) { /* refere to this... */ }
```
.call will call the function wit ha given context and the reminder arguments.
```
// .call
myFunction.call(thisArg, 1, 2, 3)
```
.apply will call the function wit ha given context and the reminder arguments in array format.
```
// .apply
myFunction.apply(thisArg, [1, 2, 3])
```
.bind will create a new function that is *bound* to a given thisArg.
```
// .bind
boundFunc = myFunction.bind(thisArg)
bundFunc(1, 2, 3)
```

## What is a closure? What is hoisting?

A closure is a combination of a function and the lexical environment (lexical scope) in which the function was declared.

In other words a closure is a combination of a function body, and some data, that it is stored in accesible to it.

Each closure has access to 3 scopes:

- Local Scope (Own scope)
- Outer Functions Scope
- Global Scope

[MDN Article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

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

The Event Loop is a... loop, which waits processes meesages from the Event Queue, so that when an event is added to the queue.

[Cool Gist](https://gist.github.com/jesstelford/9a35d20a2aa044df8bf241e00d7bc2d0)

## What would be a reason to use ES6 classes?

It mostly helps to use the prototypical inhericance of JS in a way that is more natural and easy to read.

- Provides and alternative to constructor functions.
- It helps to setup inheritance chains via the `extends` keyword more easily than by using `.prototype`.
- Allows to use `super.myMethod` which is easier than `ParentConstructor.prototype.method.call(this)`.

[Discussion on SO](https://stackoverflow.com/questions/30783217/what-benefits-does-es2015-es6-class-syntax-provide)

## How to create Class methods (object.prototype)?

First, create a "class" with a constructor function. Then add the method to its prototype.

```
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

## Function references and binding the this keyword to make the this keyword work inside the function body, i.e. in an onclick event.

Make `this` be attached to function as needed:

```html
<button id='btn1'>Button 1</button>
<button id='btn2'>Button 2</button>

<script>
  (function () {
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

**Event Capturing**: In some cases is possible to "capture" events during their "capture phase", which occure before the bubbling phase.

[Source Article](https://javascript.info/bubbling-and-capturing)

## How to create DOM element with vanilla JS?

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

[Source](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

## What are some major differences between ES5 and ES6

In progress...

# HTTP

## What' the difference between GET and POST?

GET and POST are two types of HTTP requests.

In progress...

*Bonus: Why is GET sometimes considered to be sending parameters to the naked eye?*

# General Architecture Concepts

## Describe MVC

In progress...

# Vue

## Can you explain Vue's reactivity?

In progress...

## What is the virtual DOM?

In progress...

## Vue concepts

- vue:
  - app: new Vue({})
  - components (export default)
    - html/script/style/ together
      - v-bind
      - v-for
      - @click="$emit('event-name', eventData)"
      - v-on
      - v-model
    - script:
      - props: key-value pair with the html properties
      - data(): function returns the state
      - methods{}: obj with methods of the component
      - created(): hook
  - template directive
  - state
    - vuex state management
  - vuejs devtools
  - unit testing: Vue.nextTick

# CSS/Style

## Difference between inline, inline-block, block elements?

In progress...

## How to select the first children of an element? How to select the odd children elements?

In progress...

## What does box-sizing: border-box do?

In progress...

## Explain absolute/relative/fixed positioning.

In progress...

# Found a mistake?

Send me an issue at https://github.com/miguelrincon/miguelrincon.github.io
