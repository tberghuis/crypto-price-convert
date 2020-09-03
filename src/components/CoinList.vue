<template>
  <div>
    <div>coin list</div>
    <div v-for="coin in coinList" :key="coin">
      <Coin :coinSymbol="coin"></Coin>
    </div>

    <!-- todo search all coin symbols and names dropdown config.js -->
    <div>
      add coin
      <input v-model="addCoinInput" />
      <button @click="addCoin">add</button>
    </div>
    <hr />
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import Coin from "./Coin.vue";

export default {
  setup() {
    const coinList = ref(["USDT", "BTC", "ETH", "LTC"]);
    const addCoinInput = ref("");

    const addCoin = () => {
      console.log("addCoinInput", addCoinInput.value);
      coinList.value.push(addCoinInput.value.toUpperCase());
    };

    return {
      coinList,
      addCoinInput,
      addCoin
    };
  },
  components: {
    Coin
  }
};
</script>

<style>
</style>