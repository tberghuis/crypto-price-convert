<template>
  <div>
    coin {{ coinValue }} {{ coinSymbol }}
    <button @click="convert">convert</button>
  </div>
</template>

<script>
// import {
//   btcValueSubject,
//   convertCoinValueToBtcValue
// } from "../subjects/btcValue.js";
// import {
//   tradingPairPrice,
//   fetchTradingPairPrices
// } from "../data/tradingPairPrice.js";

import { nextConvertCoinEvent } from "../subjects/convertCoinEvent.js";

import { ref, reactive } from "vue";

// type of coin passed in by prop

// dont update if current coint is self
let currentCoinSymbolConverting = "TODO";

export default {
  props: {
    coinSymbol: String
  },
  setup({ coinSymbol }) {
    const coinValue = ref(0);

    // btcValueSubject.subscribe(btcValue => {
    //   console.log("changed");
    //   coinValue.value = btcValue / tradingPairPrice[`${coinSymbol}BTC`];
    // });

    const convert = async () => {
      console.log("convert");
      currentCoinSymbolConverting = coinSymbol;
      await nextConvertCoinEvent(coinSymbol, coinValue.value);
    };

    // expose to template
    return {
      coinValue,
      convert
    };
  }
};
</script>


<style scoped>
</style>
