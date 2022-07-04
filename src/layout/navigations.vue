<template>
  <div class="bigBox">
    <a
      @click="goView(item.path)"
      class="smallBox"
      :class="{ active: $route.path === item.path }"
      v-for="(item, index) in tagsView"
      :key="index"
    >
      {{ item.title }}
      <span @click.stop="delTags(index)">
        <el-icon v-if="$route.path !== item.path"><CircleClose /></el-icon>
      </span>
    </a>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { watch, computed } from 'vue'
import routers from '../router/index'
import { useRouter, useRoute } from 'vue-router'
const store = useStore()
const router = useRouter()
const route = useRoute()
// 监听
watch(
  () => router.currentRoute.value.path,
  () => {
    if (route.meta && route.meta.title && route.path) {
      const obj = {
        title: route.meta.title,
        path: route.path
      }
      store.commit('tagsview/setTagsView', obj)
    }
  },
  { immediate: true, deep: true }
)

// 计算属性
const tagsView = computed(() => {
  return store.getters.tagsview
})

// 点击跳转
const goView = (goView) => {
  routers.push(goView)
}

// 点击删除tagsview
const delTags = (index) => {
  console.log(index)
  store.commit('tagsview/removeTagsView', index)
  console.log(route.meta.title)
}
</script>
<style lang="scss" scoped>
.bigBox {
  width: 100%;
  height: 34px;
  margin-top: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  padding: 2px 0;
  line-height: 34px;
  padding: 0 6px;
  overflow-x: auto;
  .smallBox {
    font-size: 14px;
    display: inline-block;
    padding: 0 4px;
    line-height: 22px;
    border: 1px solid #c0c0c0;
    margin-left: 8px;
    box-sizing: border-box;
    cursor: pointer;
    .el-icon {
      vertical-align: -0.15em;
      display: inline;
    }
  }
  .smallBox.active {
    background-color: #000;
    color: white;
    font-size: 14px;
  }
}
</style>
