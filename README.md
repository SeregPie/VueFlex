# VueFlex

A flexbox grid system.

## demo

[Try it out!](https://seregpie.github.io/VueFlex/)

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

Register the components in the scope of another component.

```javascript
import VueFlex from '@seregpie/vueflex';

export default {
  components: {
    [VueFlex.Box.name]: VueFlex.Box,
    [VueFlex.Item.name]: VueFlex.Item,
  },
  /*...*/
};
```

### browser

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@seregpie/vueflex"></script>
```

If Vue is detected, the components will be registered automatically.

## usage

```html
<vue-flex-box
  :gap="16"
  align-items="center"
  justify-content="space-between"
  wrap
>
  <vue-flex-item><!--...--></vue-flex-item>
  <vue-flex-item><!--...--></vue-flex-item>
</vue-flex-box>
```

---

Nested boxes inherit the gap from their parent.

```html
<vue-flex-box :gap="8">
  <vue-flex-item
    style="width: 100px;"
  ><!--...--></vue-flex-item>
  <vue-flex-box
    direction-column
    style="flex-grow: 1;"
  >
    <vue-flex-item><!--...--></vue-flex-item>
    <vue-flex-item><!--...--></vue-flex-item>
  </vue-flex-box>
</vue-flex-box>
```

---

Provide any unit.

```html
<vue-flex-box gap="2em"><!--...--></vue-flex-box>
```

## components

### VueFlexBox

#### properties

| property | type | default |
| ---: | :--- | :--- |
| `align-content` | `String` | `'stretch'` |
| `align-items` | `String` | `'stretch'` |
| `direction-column` | `Boolean` | `false` |
| `gap` | `[Number, String]` | `0` |
| `justify-content` | `String` | `'flex-start'` |
| `reverse-direction` | `Boolean` | `false` |
| `reverse-wrap` | `Boolean` | `false` |
| `tag` | `String` | `'div'` |
| `wrap` | `Boolean` | `false` |

### VueFlexItem

#### properties

| property | type | default |
| ---: | :--- | :--- |
| `tag` | `String` | `'div'` |
