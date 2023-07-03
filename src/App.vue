<script lang="ts" setup>
import Scene from "./components/Scene.vue";
import BigScreen from "./components/BigScreen.vue";
// import { onMounted, reactive, watch, computed, ref } from "vue";
// import { getSmartCityInfo, getSmartCityList } from "@/api/api";
// import gsap from "gsap";
</script>
<template>
  <div class="home">
    <Scene></Scene>
    <BigScreen></BigScreen>
  </div>
</template>
<style>
html {
  font-size: calc(100vw / 19.2);
}
body {
  font-size: 16px;
}
</style>
