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
        <span>数据可视化</span>
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
        <div class="magnify">
          <i class="iconfont icon-quanping_o"></i>
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
          <img src="../../public/login.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  isCollapse: {
    type: Boolean
  }
})
const collapse = defineEmits(['isCollapse'])
const newCollapse = () => {
  collapse('isCollapse')
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
      margin-left: 16px;
      line-height: 45px;
      font-size: 14px;
      color: #c0c0c0;
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
</style>
