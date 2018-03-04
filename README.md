# VueFlexBox

...

## dependencies

- [Vue](https://github.com/vuejs/vue)

## setup

### npm

```shell
npm install vueflexbox
```

### ES module

Register the component globally.

```javascript
import Vue from 'vue';
import {VueFlexBox, VueFlexItem} from 'vueflexbox';

Vue.component(VueFlexBox.name, VueFlexBox);
Vue.component(VueFlexItem.name, VueFlexItem);
```

*or*

Register the component in the scope of another instance.

```javascript
import {VueFlexBox, VueFlexItem} from 'vueflexbox';

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
<script src="https://unpkg.com/vueflex"></script>
```

If Vue is detected, the component will be registered automatically.

## usage

...

## properties

...
