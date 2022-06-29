<template>
  <div class="bigBox">
    <a class="smallBox" href="javascript:;">
      个人中心
      <el-icon><CircleClose /></el-icon>
    </a>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.bigBox {
  width: 100%;
  height: 34px;
  margin-top: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  padding: 2px 0;
  line-height: 34px;
  padding: 0 6px;
  .smallBox {
    font-size: 14px;
    display: inline-block;
    padding: 0 4px;
    line-height: 22px;
    border: 1px solid #c0c0c0;
    margin-left: 8px;
    box-sizing: border-box;
    .el-icon {
      vertical-align: -0.15em;
      display: inline;
    }
  }
}
</style>
