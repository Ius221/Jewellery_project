<template>
  <div class="parent-div">
    <the-nav />
    <router-view />
  </div>
</template>

<script>
import TheNav from "./nav/TheNav.vue";
export default {
  components: { TheNav },
  data() {
    return {};
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
