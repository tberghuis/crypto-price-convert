<template>
  <div>
    <div>array test</div>
    <div>{{arrRef}}</div>
    <button v-on:click="buttonClick">Add 1</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

const arrRef = ref([0, 1]);

const buttonClick = () => {
  arrRef.value.push(2);
};

export default {
  setup() {
    // expose to template
    return {
      arrRef,
      buttonClick
    };
  }
};
</script>

<style>
</style>