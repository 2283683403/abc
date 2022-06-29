<template>
  <div class="app">
    <!-- 左侧内容 -->
    <sideber :isCollapses="isCollapse"></sideber>

    <!-- 右侧内容 -->
    <div class="RefChilde">
      <!-- 右侧上方内容 -->
      <contents @isCollapse="handler" :isCollapse="isCollapse"></contents>
      <!-- 右侧导航栏内容 -->
      <div class="navigationBar">
        <navigations></navigations>
      </div>
      <!-- 右侧下方主内容 -->
      <!-- <div class="mainContent"></div> -->
      <maincontent></maincontent>
      2
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import sideber from './sidebar.vue'
import contents from './content.vue'
import navigations from './navigations.vue'
import maincontent from './maincontent.vue'
const isCollapse = ref(false)

// 接收子组件的事件
const handler = () => {
  isCollapse.value = !isCollapse.value
  console.log(isCollapse)
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: 100%;
}
.RefChilde {
  width: 100%;
}
</style>
