# Communicate across components

## 1. Pass props to child components

Define properties in the component:

```html
<template> ... </template>
<script>
export default {
  // Can be an array for quick setup
  props: ['name', 'age', 'nicknames']

  // Can be an object for validation and default
  props: {
    age: Number, // A single type
    name: {
      type: String,
      required: true, // A required prop

      // For default values:
      default: 'Mike',
      default: function(){ /* ... return ...*/ }
    },
    nicknames: [String, Array] // Multiple types are acceptable, here we accept both Array and String
  }
};
</script>
```

Pass the from a parent:
```html
<!-- Use :prop to bind to this value dynamically -->
<my-comp :name="name"></my-comp>
```

2. Trigger events

Parent Component:

```html
<!-- Use :prop to bind to this value dynamically -->
<template>
  ...
  <button @click="changeName()">Change in parent</button>
  <my-comp :name="name" @nameChangeRequested="name = $event"></my-comp>
</template>

<script>
import MyComp from "./MyComp.vue";

export default {
  data() {
    return {
      name: "Miguel"
    };
  },
  methods: {
    changeName() {
      this.name = "Alejandro";
    }
  },
  components: {
    MyComp
  }
};
</script>
```

Child Component:

```html
<template>
  ...
  <button @click="resetName">Reset Name</button>
</template>
<script>
export default {
  // Can be an array for quick setup
  props: ['name']

  methods: {
    resetName() {
      // Custom event name
      this.$emit("nameChangeRequested", 'A new name');
    }
  }
};
</script>
```

3. Use callbacks

Parent Component:

```html
<template>
  ...
  <my-comp @changeNameFn="changeName"></my-comp>
</template>

<script>
import MyComp from "./MyComp.vue";

export default {
  data() {
    return {
      name: "Miguel"
    };
  },
  methods: {
    changeName() {
      this.name = "Alejandro";
    }
  },
  components: {
    MyComp
  }
};
</script>
```

Child (MyComp):

```html
<template>
  ...
  <button @click="changeNameFn()">Reset Name with Callback</button>
</template>
<script>
export default {
  props: {
    // Type Function is valid
    changeNameFn: Function
  }
};
</script>
```