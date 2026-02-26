<template>
  <div style="font-size: larger">
    <span style="align-items: center; display: inline-flex"> </span>
    <!-- <i  :style="{ color: color ? color : defaultColor, fontSize: size ? size : defaultSize + 'px' }"> -->
    <i
      style="display: inline-flex; height: 1em; justify-content: center; line-height: 1em; position: relative; width: 1em"
      :style="{ fontSize: mSize, fill: mColor, width: mSize, height: mSize, fontSize: mSize }"
    >
      <!-- iconfont官网复制svg代码  https://www.iconfont.cn/ -->
      <!-- <svg></svg> -->
      $0
    </i>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['color', 'size'],
  mounted() {
    this.mColor = this.color ? this.color : this.mColor
    this.mSize = (this.size ? this.size : this.mSize) + 'px'
  },
  data() {
    return {
      mColor: 'var(--icon-fill)',
      mSize: 25
    }
  }
}
</script>

<style scoped>
svg {
  width: 100%;
  height: 100%;
}
</style>
