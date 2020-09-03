<template>
  <div id="app">
    <ArrayTest></ArrayTest>
    <BtcConvert></BtcConvert>
  </div>
</template>

<script>
import BtcConvert from "./components/BtcConvert.vue";
import ArrayTest from "./components/ArrayTest.vue";

export default {
  name: "App",
  components: {
    BtcConvert,
    ArrayTest
  }
};
</script>

<style>
/* #app {
} */
</style>
