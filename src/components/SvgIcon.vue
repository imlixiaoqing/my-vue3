<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#${iconClass}`"></use>
  </svg>
</template>

<script lang='ts'>
export default {
  name: 'SvgIcon',
  props: ['iconClass'],
}
</script>

<style lang='scss' scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
