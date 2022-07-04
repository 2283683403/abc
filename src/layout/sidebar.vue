<template>
  <!-- 左侧内容 -->
  <div
    class="index-left"
    :style="(width = props.isCollapses ? '64px' : '219px')"
  >
    <!-- logo和名字 -->
    <div class="logoName">
      <img src="../../public/login.png" alt="" />
      <span v-show="!props.isCollapses"><h4>imooc-admin</h4></span>
    </div>
    <!-- 侧边栏 -->
    <el-menu
      active-text-color="#fff"
      background-color="#304156"
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      text-color="#c0c0c0"
      :collapse="props.isCollapses"
      :unique-opened="true"
      router
    >
      <sidebartwo
        v-for="item in data"
        :key="item"
        :menuList="item"
      ></sidebartwo>
    </el-menu>
  </div>
</template>

<script setup>
import sidebartwo from './sidebarTwo.vue'
import { useRouter } from 'vue-router'
import { defineProps, computed } from 'vue'
import { filterRouters, generateMenus } from '../utils/router'
import { filterMenuData } from '../utils/menu'
const router = useRouter()

const props = defineProps({
  isCollapses: {
    type: Boolean
  }
})

const data = computed(() => {
  const routes = filterRouters(router.getRoutes())
  return filterMenuData(generateMenus(routes))
})
</script>

<style lang="scss" scoped>
.index-left {
  height: 100%;
  background-color: #304156;
  .logoName {
    width: 100%;
    padding: 10px 0 21px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 44px;
      height: 44px;
    }
    h4 {
      font-size: 16px;
      color: white;
      margin-left: 10px;
    }
  }
  .el-menu {
    height: 100%;
    border-right: 1px solid #304156;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    height: 100%;
  }
}
</style>
