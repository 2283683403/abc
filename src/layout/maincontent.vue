<template>
  <div class="mainContent">
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.mainContent {
  width: 100%;
  height: calc(100vh - 85px);
  margin: 16px 20px 20px 20px;
  border-radius: 4px;
  background-color: #c60;
}
</style>
