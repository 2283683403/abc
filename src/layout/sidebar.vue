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
      active-text-color="#c0c0c0"
      background-color="#304156"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#c0c0c0"
      :collapse="props.isCollapses"
      :unique-opened="true"
    >
      <el-menu-item index="1">
        <el-icon><UserFilled /></el-icon>
        <span>个人中心</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><TrendCharts /></el-icon>
        <span>数据可视化</span>
      </el-menu-item>

      <el-sub-menu index="3">
        <template #title>
          <el-icon><User /></el-icon>
          <span>用户</span>
        </template>
        <el-menu-item index="3-1">
          <el-icon><User /></el-icon>
          员工管理
        </el-menu-item>
        <el-menu-item index="3-2"
          ><el-icon><Tickets /></el-icon>
          角色列表
        </el-menu-item>
        <el-menu-item index="3-2">
          <el-icon><Lollipop /></el-icon>
          权限列表
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="4">
        <template #title>
          <el-icon><Tickets /></el-icon>
          <span>文章</span>
        </template>
        <el-menu-item index="4-1">
          <el-icon><Operation /></el-icon>
          文章排名
        </el-menu-item>
        <el-menu-item index="4-1">
          <el-icon><ChatLineSquare /></el-icon>
          创建文章
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  isCollapses: {
    type: Boolean
  }
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
