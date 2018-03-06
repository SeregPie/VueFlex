# VueFlex

...

## dependencies

- [Vue](https://github.com/vuejs/vue)

## setup

### npm

```shell
npm install @seregpie/vueflex
```

### ES module

Register the component globally.

```javascript
import Vue from 'vue';
import {VueFlexBox, VueFlexItem} from '@seregpie/vueflex';

Vue.component(VueFlexBox.name, VueFlexBox);
Vue.component(VueFlexItem.name, VueFlexItem);
```

*or*

Register the component in the scope of another instance.

```javascript
import {VueFlexBox, VueFlexItem} from '@seregpie/vueflex';

export default {
  // ...
  components: {
    [VueFlexBox.name]: VueFlexBox,
    [VueFlexItem.name]: VueFlexItem,
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
