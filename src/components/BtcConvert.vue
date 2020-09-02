<template>
  <div>
    <Coin coinSymbol="LTC"></Coin>
    <Coin coinSymbol="ETH"></Coin>
    <Coin coinSymbol="USDT"></Coin>
    <Coin coinSymbol="BTC"></Coin>
    <Coin coinSymbol="BZRX"></Coin>
  </div>
</template>

<script>
import Coin from "./Coin.vue";

export default {
  name: "BtcConvert",

  components: {
    Coin
  }
};
</script>


<style scoped>
</style>
