---
layout: page
title: Vue.js File Sample
share-img: "/img/pages/vue-logo.png"
---

## Sample `.vue` file

Below is an example of a Vue file:

```html
<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-header></app-header>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <app-server-item v-for="index in 5" :index="index" :key="index">
          </app-server-item>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-server-details></app-server-details>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>

  // Import from other .vue files
  import AppHeader from './AppHeader.vue'
  import AppServerDetails from './AppServerDetails.vue';
  import AppServerItem from './AppServerItem.vue';
  import AppFooter from './AppFooter.vue'

  // Register a compoenent globally
  Vue.component('app-folder', AppFooter)

  // Use "export default" of the component
  export default {
      // Register a components locally
      components: {
          'app-header': AppHeader, // Use the selector hyphenated
          'app-server-item': AppServerItem,
          AppServerDetails, // Use a CamelCase format also renders
          'app-footer': AppFooter,
      },
      // Return the data in a method
      data() {
        return {
          myData: 'myValue'
        }
      }
      methods {
        // ... add methods
      }
      // ... other configuration
  }
</script>

<style scoped>
  /* Use "scoped" to have styles only affect these components. Emulating a shadow DOM. These styles will get addded to the head of the document anyway.
  */

  /* ... add more styles ... */
</style>
```
