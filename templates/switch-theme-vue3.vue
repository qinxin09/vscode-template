<template>
  <div>
    <!-- <span style="color: var(--icon-fill); font-size: 20px; margin-right: 10px">看我颜色</span> -->
    <el-switch
      style="--el-switch-on-color: #353535; --el-switch-off-color: #4088f7"
      inline-prompt
      inactive-text="日间模式"
      active-text="夜间模式"
      v-model="darkTheme"
      @change="setTheme(true)"
      :active-action-icon="Sunny"
      :inactive-action-icon="Sunny"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Sunny } from '@element-plus/icons-vue'
import { onMounted } from 'vue'

const darkTheme = ref(false)
type THEME = {
  name: string
  class: string
  property: {
    [key: string]: string
  }
}
class ThemeConfig {
  dark: THEME = {
    name: 'dark',
    class: 'dark',
    property: {
      '--icon-fill': '#ffffff'
    }
  }
  light: THEME = {
    name: 'light',
    class: '',
    property: {
      '--icon-fill': '#444444'
    }
  }
  setTheme = (switchTheme = true) => {
    // 获取根元素
    const defaultTheme = this.dark
    const storageTheme = JSON.parse(localStorage.getItem('theme') || 'null')
    const currentTheme = storageTheme === null ? defaultTheme : storageTheme
    let theme = currentTheme
    if (switchTheme) {
      theme = theme.name === this.dark.name ? this.light : this.dark
    }
    const root = document.documentElement
    root.className = theme.class
    localStorage.setItem('theme', JSON.stringify(theme))
    // 修改 CSS 变量的值
    for (const key in theme.property) {
      root.style.setProperty(key, theme.property[key])
    }
    darkTheme.value = theme.name === defaultTheme.name
    return theme
  }
}
const setTheme = new ThemeConfig().setTheme

onMounted(() => {
  setTheme(false)
})
</script>
<!-- 
  //使用深色主题 
  // 1. main.js
  import 'element-plus/theme-chalk/dark/css-vars.css'
  // 2 html标签上添加 class="dark"
  <html class="dark">
  -->

<style type="text/css">
/**
  修改 CSS 变量的值,
       通过代码修改CSS 变量的值
       root.style.setProperty('--icon-fill', '#444444')
       通过  修改CSS 变量的值
      
        html 和 :root 的区别
        html 是根元素，:root 是一个伪类，表示文档的根元素。在大多数情况下，html 和 :root 是相同的，因为它们都表示文档的根元素。但是，:root 是一个伪类，可以用于选择文档的根元素，而 html 是一个实际的元素，可以用于选择文档的根元素。
        这里随意使用哪个都可以
        :root {
          --icon-fill: #444444;
        }
        html.dark {
          --icon-fill: #ffffff;
        }
  **/
:root {
  --icon-fill: #444444;
}
/* html class=dark时 */
/* html.dark */
:root.dark {
  --icon-fill: #ffffff;
}
</style>
