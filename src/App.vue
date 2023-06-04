<script lang="ts" setup>
import Editor from "./views/editor.jsx";
import data from "./data/data.json";
</script>
<style lang="scss" scoped>
.app {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
}
</style>
<template>
  <div id="app" class="app">
    <Editor :data="data"></Editor>
  </div>
</template>
