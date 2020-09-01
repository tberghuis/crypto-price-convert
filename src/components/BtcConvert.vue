<template>
  <div>
    <Coin coinSymbol="LTC"></Coin>
    <Coin coinSymbol="ETH"></Coin>
    <Coin coinSymbol="USDT"></Coin>
    <Coin coinSymbol="BTC"></Coin>
  </div>
</template>

<script>
import { convertToBtc } from "../services/convert.js";
import Eth from "./Eth.vue";
import Coin from "./Coin.vue";

export default {
  name: "BtcConvert",
  data() {
    return { usdt: 0, btc: 0 };
  },
  methods: {
    convertToBtc() {
      console.log("usd", this.usdt);
      convertToBtc(this.usdt);
    }
  },
  components: {
    Eth, Coin
  }
};
</script>


<style scoped>
</style>
