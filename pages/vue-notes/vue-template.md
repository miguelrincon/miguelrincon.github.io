---
layout: page
title: Vue.js Templates
subtitle: Frequently used features
share-img: "/img/pages/vue-logo.png"
---

* This will become a table of contents (this text will be scraped).
{:toc}

## `{% raw %}{{interpolation}}{% endraw %}`

Display js data in the templates.

```js
new Vue({
  el: "...",
  data: {
    message: "my message."
  },
  computed: {
    // Computed properties are cached and more efficient!
    uppercaseMessageComputed() {
      return this.message.toUpperCase();
    }
  },
  method: {
    uppercaseMessageMethod() {
      return this.message.toUpperCase();
    }
  }
});
```

Interpolation works for `data` and `methods`

```html
{% raw %}
<p>{{ message }}</p>
<p>my message.</p>

<p>{{ uppercaseMessageComputed }}</p>
<p>MY MESSAGE.</p>

<p>{{ uppercaseMessage() }}</p>
<p>MY MESSAGE.</p>
{% endraw %}
```

## `v-bind:<attr-name>`

Works like interpolation, but for attributes:

To make `href` dynamic in this template:

```html
<a href="https://google.com"></a>
```

The data can be stored in `data.url`:

```js
new Vue({
  el: "...",
  data: {
    url: "https://google.com",
    higlighted: true
  }
});
```

So, we use the attribute `v-bind:href` to make the href dynamic dynamic.

```html
<a v-bind:href="url">link</a>
```
```html
<!-- shorthand syntax -->
<a :href="url">link</a>
```

A more common case, is for `class` and `style` attributes: https://vuejs.org/v2/guide/class-and-style.html

```html
<a :class="{ 'red' : !url }">link</a> <a :class="higlighted">link</a>
<!-- string or object -->
<a :class="[ higlighted, { 'red' : !url } ]">link</a>
<!-- array notation, for multiple classes -->

<a :style="{ 'width' : 100 + 'px' }">link</a>
<!-- 100 can use a data value... computed, expression, etc. -->
<a :style="{ 'backgroundColor' : 'green' }">link</a>
<!-- use camelCase to render as snake-case -->
```

## `v-on:<event-name>`

Listen to DOM events. https://vuejs.org/v2/guide/events.html

Given the method:

```js
  data: { counter: 0 }
  methods: {
    increaseCounter(n = 1) {
      this.counter += n
    }
  }
```

```html
<!-- call without args -->
<button v-on:click="increaseCounter">Add 1</button>

<!-- call with args -->
<button v-on:click="increaseCounter(2)">Add 2</button>

<!-- assign to data directly -->
<button v-on:click="counter -= 1">Decrease 1 without a method</button>

<!-- shorthand syntax of "v-on:" -->
<button @click="increaseCounter">Add 1</button>
```

## `v-model`

Is the basic directive to combine forms and model data.

https://vuejs.org/v2/guide/forms.html

```html
<input v-model="message" placeholder="edit me" />
<p>Message is: {{ message }}</p>
```

## `watch`

Can act similarly to `compute`, but it is typically used for async operations.

https://vuejs.org/v2/guide/computed.html#Watchers

```js
new Vue({
  el: '...',
  data: {
    msg: 'not saved'
    name: 'John Doe'
  },
  watch: {
    name(val, oldValue) {
      this.msg = 'saving...'
      saveToServer(val).then(() => {
        this.msg = 'saved.'
      })
    }
  }
})
```

```html
<input v-model="name" placeholder="edit me to save" /> {{msg}}
```

## `v-if` and `v-show`

Show and hide elements in the page.

```html
<!-- Remove or add from the DOM -->
<p v-if="show">On</p>
<p v-else>Off</p>
<button @click="show = !show">Toggle<button></button></button>
```

```html
<!-- Uses display: none; to hide element -->
<p v-show="show">Message</p>
<button @click="show = !show">Toggle<button></button></button>
```

## `v-for`

Iterate over arrays, objects

```html
<!-- iterate -->
<ul>
  <li v-for="item in items">{{item}}</li>
</ul>
```

Keep track of the key of element.

```html
<!-- iterate -->
<ul>
  <li v-for="item in items" :key="item.id">{{item.name}}</li>
</ul>
```

Get the index of the array elem:

```html
<!-- get the index -->
<ul>
  <li v-for="(item, i) in items">{{i}}. {{item}}</li>
</ul>
```

Get the value key pairs of an object:

```html
<ul>
  <!-- index is also optional -->
  <li v-for="(value, key, i) in object">{{i}}. {{k}}: {{value}}</li>
</ul>
```

Iterate over a number range:

```html
<ul>
  <li v-for="n in 10">n</li>
</ul>
```

