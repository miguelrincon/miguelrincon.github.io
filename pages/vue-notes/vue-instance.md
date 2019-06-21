---
layout: page
title: Vue.js Instance and Components
share-img: "/img/pages/vue-logo.png"
---

## Vue.JS Instance

There can be several instances on the page. `var vm = new Vue({...})` allows external access to data and methods via data proxying.

It is possible to interact with the Vue instance from regular JavaScript.

```js
var vm = new Vue({...})

vm.$el // HTML instance, a native HTML element.

vm.$data // Data object and properties

// js object which stores HTML elements that are marked by the attribute ref="myKey"
vm.$refs // vm.$refs.myKey === HTML node

vm.$mount('#app'); // Mount the HTML element selector after creation, similar to "el".


vm.$mount(); // Mount without HTML element, to add it later
document.getElementById('app').appendChild(vm.$el);
```

See more: [http://vuejs.org/api](http://vuejs.org/api)

## Vue.JS Component

Defining a component programmatically:

```js
// Register a component globally
Vue.component("my-component", {
  // We use a method to return the data, instead of a plain object
  data() {
    return {
      key: "A Value"
      // ...
    };
  }
  // ...
});
```

```js
// Register a component locally
var cmp = {
  data() {
    return {
      key: "A Value"
    };
  }
  // ...
};

new Vue({
  el: "#app",
  components: {
    "my-component": cmp
  }
});
```

When defining a component, data should be defined as a function, so a new data object is created for each component.
