<template>
  <div class="contents">
    <!-- 右侧顶部内容 -->
    <div class="navbar">
      <!-- 侧边栏显示隐藏 -->
      <div class="collopseBtn" @click="newCollapse">
        <el-icon v-if="props.isCollapse === false"><Fold /></el-icon>
        <el-icon v-else><Expand /></el-icon>
      </div>

      <!-- 导航名字 -->
      <div class="dataText">
        <!-- <span>数据可视化</span> -->
        <el-breadcrumb class="breadcrumb" separator="/">
          <template v-for="(item, index) in breadcrumbData" :key="index">
            <el-breadcrumb-item
              v-if="index !== breadcrumbData.length - 1"
              :to="{ path: item.path }"
            >
              {{ item.meta.title }}
            </el-breadcrumb-item>
            <el-breadcrumb-item v-else>
              <span class="s1">{{ item.meta.title }}</span>
            </el-breadcrumb-item>
          </template>
        </el-breadcrumb>
      </div>

      <!-- 右侧功能图标 -->
      <div class="right-menu">
        <!-- 指导 -->
        <el-tooltip content="使用指导" placement="bottom">
          <div class="guide">
            <i class="iconfont icon-yuanwenyindao"></i>
          </div>
        </el-tooltip>
        <!-- 搜索 -->
        <div class="keyword">
          <i class="iconfont icon-sousuoleimufill"></i>
        </div>
        <!-- 放大 -->
        <div class="magnify" @click="full">
          <i class="iconfont icon-quanping_o" v-if="!isFull"></i>
          <i class="iconfont icon-tuichuquanping" v-else></i>
        </div>
        <!-- 换肤 -->
        <el-tooltip content="换肤" placement="bottom">
          <div class="peeling">
            <i class="iconfont icon-huanfu"></i>
          </div>
        </el-tooltip>
        <!-- 中英文切换 -->
        <el-tooltip content="国际化" placement="bottom">
          <div class="textCE">
            <i class="iconfont icon-zhongyingwen"></i>
          </div>
        </el-tooltip>
        <!-- logo -->
        <div class="logoSmall">
          <el-dropdown @command="handleCommand">
            <img src="../../public/login.png" alt="" />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="home">首页</el-dropdown-item>
                <el-dropdown-item command="profile">课程</el-dropdown-item>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref, computed } from 'vue'
// 全屏的插件
import screenfull from 'screenfull'
// 路由
import { useRouter, useRoute } from 'vue-router'

import { useStore } from 'vuex'

const router = useRouter()

const route = useRoute()
// 全屏切换的变量
const isFull = ref(false)

const store = useStore()

const breadcrumbData = computed(() => {
  return route.matched.filter((item) => item.meta.title)
})
// 全屏切换功能实现
const full = () => {
  screenfull.toggle()
  if (!screenfull.isEnabled) {
    alert('该浏览器不支持全屏功能')
  }
  isFull.value = !isFull.value
}

const props = defineProps({
  isCollapse: {
    type: Boolean
  }
})

// 接收变量
const collapse = defineEmits(['isCollapse'])
const newCollapse = () => {
  collapse('isCollapse')
}

// 点击退出登录，首页，等按钮
const handleCommand = (command) => {
  switch (command) {
    case 'home':
      handleToHome()
      break
    case 'logout':
      handleLogout()
      break
  }
}
// 返回首页
const handleToHome = () => {
  router.push('/')
}
// 退出登录
const handleLogout = async () => {
  try {
    await store.dispatch('user/logout')
    router.push('/login')
  } catch (err) {
    console.log(err)
  }
}
</script>

<style lang="scss" scoped>
// 右侧布局
.contents {
  width: 100%;
  .navbar {
    width: 100%;
    height: 50px;
    overflow: hidden;
    align-items: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    padding: 0 6px;
    // 切换与隐藏的样式
    .collopseBtn {
      line-height: 50px;
      .el-icon {
        margin-top: 4px;
        font-size: 26px;
        padding: 6px;
        float: left;
      }
    }
    // 导航名字显示
    .dataText {
      float: left;
      .el-breadcrumb {
        margin-left: 16px;
        line-height: 45px;
        font-size: 14px;
        color: #c0c0c0;
      }
    }
    // 右侧功能图标区域
    .right-menu {
      display: flex;
      align-items: center;
      float: right;
      padding-right: 22px;
      cursor: pointer;
      // 图标
      .logoSmall {
        img {
          margin-top: 5px;
          width: 40px;
          height: 40px;
        }
      }
      // 中英文切换
      .textCE {
        margin-top: 4px;
        margin-right: 20px;
        i {
          font-size: 27px;
          color: #686868;
        }
      }
      // 换肤
      .peeling {
        margin-top: 4px;
        margin-right: 12px;
        i {
          font-size: 32px;
          color: #686868;
        }
      }
      // 放大
      .magnify {
        margin-top: 4px;
        margin-right: 12px;
        i {
          font-size: 32px;
          color: #686868;
        }
      }
      // 搜索
      .keyword {
        margin-top: 4px;
        margin-right: 12px;
        i {
          font-size: 30px;
          color: #686868;
        }
      }
      // 指导
      .guide {
        margin-top: 4px;
        margin-right: 12px;
        i {
          font-size: 26px;
          color: #686868;
        }
      }
    }
  }
}
.s1 {
  cursor: pointer;
}
</style>
