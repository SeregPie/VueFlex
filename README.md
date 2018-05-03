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

If Vue is detected, the components will be registered automatically.

## usage

```html
<vue-flex-box
  wrap
  justify-content="space-between"
  align-items="center"
  :spacing="16"
>
  <vue-flex-item><!--...--></vue-flex-item>
  <vue-flex-item><!--...--></vue-flex-item>
</vue-flex-box>
```

---

Nested boxes inherit spacing from their parent.

```html
<vue-flex-box :spacing="8">
  <vue-flex-item style="width: 100px;"><!--...--></vue-flex-item>
  <vue-flex-box
    style="flex: 1;"
    direction-column
  >
    <vue-flex-item><!--...--></vue-flex-item>
    <vue-flex-item><!--...--></vue-flex-item>
  </vue-flex-box>
</vue-flex-box>
```

## components

### VueFlexBox

#### name

`vue-flex-box`

#### properties

| property | type | default |
| ---: | :--- | :--- |
| `tag` | `String` | `'div'` |
| `directionColumn` | `Boolean` | `false` |
| `reverseDirection` | `Boolean` | `false` |
| `wrap` | `Boolean` | `false` |
| `reverseWrap` | `Boolean` | `false` |
| `justifyContent` | `String` | `'flex-start'` |
| `alignItems` | `String` | `'stretch'` |
| `alignContent` | `String` | `'stretch'` |
| `spacing` | `Number` | `0` |

### VueFlexItem

#### name

`vue-flex-item`

#### properties

| property | type | default |
| ---: | :--- | :--- |
| `tag` | `String` | `'div'` |
