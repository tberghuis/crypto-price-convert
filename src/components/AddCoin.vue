<template>
  <!-- todo search all coin symbols and names dropdown config.js -->
  <div>add coin</div>
  <input @keyup.enter="_addCoin" v-model="addCoinInput" />
  <button @click="_addCoin">add</button>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  props: ["addCoin"],

  setup({ addCoin }) {
    const addCoinInput = ref("");

    const _addCoin = () => {
      addCoin(addCoinInput.value.toUpperCase());
    };

    return {
      addCoinInput,
      _addCoin
    };
  }
};
</script>

<style>
</style>