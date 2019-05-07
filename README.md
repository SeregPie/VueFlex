# VueFlex

A flexbox grid system.

## demo

[Try it out!](https://seregpie.github.io/VueFlex/)

## setup

### npm

```shell
npm install @seregpie/vueflex
```

---

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
};
```

### browser

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@seregpie/vueflex"></script>
```

If Vue is detected, the components are registered automatically.

## usage

```html
<vue-flex-box
  align-items="center"
  gap="16px"
  justify-content="space-between"
  wrap
>
  <vue-flex-item><!--...--></vue-flex-item>
  <vue-flex-item><!--...--></vue-flex-item>
</vue-flex-box>
```

---

Nested boxes can inherit the gap from their parent.

```html
<vue-flex-box gap="8px">
  <vue-flex-item
    style="width: 100px;"
  ><!--...--></vue-flex-item>
  <vue-flex-box
    direction-column
    gap="inherit"
    style="flex-grow: 1;"
  >
    <vue-flex-item><!--...--></vue-flex-item>
    <vue-flex-item><!--...--></vue-flex-item>
  </vue-flex-box>
</vue-flex-box>
```

---

Provide any unit for the gap.

```html
<vue-flex-box gap="2em"><!--...--></vue-flex-box>
```

## components

### VueFlexBox

#### properties

| property | type | default |
| ---: | :--- | :--- |
| `alignContent` | `String` | `'stretch'` |
| `alignItems` | `String` | `'stretch'` |
| `directionColumn` | `Boolean` | `false` |
| `gap` | `String` | `'0px'` |
| `justifyContent` | `String` | `'flex-start'` |
| `reverseDirection` | `Boolean` | `false` |
| `reverseWrap` | `Boolean` | `false` |
| `tag` | `String` | `'div'` |
| `wrap` | `Boolean` | `false` |

### VueFlexItem

#### properties

| property | type | default |
| ---: | :--- | :--- |
| `tag` | `String` | `'div'` |
