---
layout: page
title: Miguel's Interview Kit
---

Interview coming up? Are you interviewing... bing interviewed? Use these reference questions and answers!

# JavaScript Questions

**What's the difference between .map and .forEach?**

`forEach()` executes a function once for each array element. `forEach()` doesn't return any value. `forEach()` makes it possible to alter the current array by using the index passed to it

`map()` **Creates a new array** with the results of calling a provided function on every element in the calling array. `map` is more useful for functional programming.

[forEach vs map Source](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)

**Does JavaScript pass by value or by reference?**

In JavaScript arguments are passed to functions by value, in the case of primitives this is very obvious, as changes to the argments are not reflected globally or in the calling function.

However, references to objects are values **too**, so objects that are sent to a function may be changes internally by the called function.

> The parameters of a function call are the function's *arguments*. Arguments are passed to functions by value. If the function changes the value of an argument, this change is not reflected globally or in the calling function. However, object references are values, too, and they are special: if the function changes the referred object's properties, that change is visible outside the function (...)

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#Description

**How to create DOM element with vanilla JS?**

By calling document.createElement(`tagName`). 

```js
let newDiv = document.createElement('div')
```

Append it:
```js
let newDiv = document.createElement("div");
newDiv.innerHTML = "Page content";
document.body.appendChild(btn);
```

[Source](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

**Explain "this"?**

`this` is a special keyword that refers to the context of execution of a function.

`this` may have different values depending on how a function is called, `this` can be:

- The "global" context (`window` in browsers, `global` in node)
- The instance of the new object, when the function is called with `new`
- The instance of the parent/invoker object, when called as a method.
- Another value... when using especial functions to call a function: `.call`, `.apply`, `.bind`.

**Note:** In strict mode, inside a function called from the global context, the value of `this` is `undefined`.

[Source in MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)
[Article](https://medium.com/quick-code/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8)

**Difference between .call, .apply, .bind?**

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

**What is a closure?**

**What is the event loop?**

**Call stack / Event loop**

**Explain event propagation and bubbling?**

**What would be a reason to use ES6 classes?**

**How to create Class methods (object.prototype)?**

**How to inherit an object from another object's prototype?**

**Function references and binding the this keyword to make the this keyword work inside the function body, i.e. in an oncl1ck event.**

**What are some major differences between ES5 and ES6**

# HTTP

**What' the difference between GET and POST?**

GET and POST are two types of HTTP requests.

GET 

*Bonus: Why is GET sometimes considered to be sending parameters to the naked eye?*

### General

Describe MVC

#### Vue

**Can you explain Vue's reactivity?**

**What is the virtual DOM?**

**Vue concepts**

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

### CSS/Style

Difference between inline, inline-block, block elements?

How to select the first children of an element? How to select the odd children elements?

What does box-sizing: border-box do?

Explain absolute/relative/fixed positioning.

# Found a mistake?

Send me an issue at https://github.com/miguelrincon/miguelrincon.github.io
