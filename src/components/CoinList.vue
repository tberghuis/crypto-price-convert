<template>
  <div>
    <AddCoin :addCoin="addCoin"></AddCoin>
    <hr />
    <div>coin list</div>
    <div v-for="coin in coinList" :key="coin">
      <Coin :coinSymbol="coin"></Coin>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import Coin from "./Coin.vue";
import AddCoin from "./AddCoin.vue";

export default {
  setup() {
    const coinList = ref(["USDT", "AUD", "BTC", "ETH", "LTC"]);

    const addCoin = coin => {
      coinList.value.push(coin);
    };

    return {
      coinList,

      addCoin
    };
  },
  components: {
    Coin,
    AddCoin
  }
};
</script>

<style>
</style>