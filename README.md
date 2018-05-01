# VueFlex

A flexbox grid system.

## demo

[Try it out!](https://seregpie.github.io/VueFlex/)

## dependencies

- [Vue](https://github.com/vuejs/vue)

## setup

### npm

```shell
npm install @seregpie/vueflex
```

### ES module

Register the components globally.

```javascript
import Vue from 'vue';
import VueFlex from '@seregpie/vueflex';

Vue.use(VueFlex);
```

*or*

Register the components in the scope of another instance.

```javascript
import VueFlex from '@seregpie/vueflex';

export default {
  // ...
  components: {
    ...VueFlex.components
  },
};
```

### browser

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@seregpie/vueflex"></script>
```

If Vue is detected, the component will be registered automatically.

## usage

...

## properties

...
