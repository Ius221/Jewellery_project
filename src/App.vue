<template>
  <div class="parent-div">
    <the-nav />
    <h1>hello world</h1>
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
