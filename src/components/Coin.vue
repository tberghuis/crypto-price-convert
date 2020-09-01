<template>
  <div>
    {{ coinSymbol }}
    <input v-model="coinValue" />
    <button @click="convert">convert</button>
  </div>
</template>

<script>
import { nextConvertCoinEvent } from "../subjects/convertCoinEvent.js";
import { btcValueSubject } from "../subjects/btcValue.js";
import { tradingPairPrice } from "../data/tradingPairPrice.js";
import { ref, reactive } from "vue";

// dont update if current coint is self
let currentCoinSymbolConverting = "TODO";

function convertFromBtcValue(btcValue, coinSymbol) {
  if (coinSymbol === "BTC") {
    return btcValue;
  }

  if (coinSymbol === "USDT") {
    return btcValue * tradingPairPrice.BTCUSDT;
  }

  if (tradingPairPrice[`${coinSymbol}BTC`]) {
    return btcValue / tradingPairPrice[`${coinSymbol}BTC`];
  }

  // will i ever need this?
  if (tradingPairPrice[`${coinSymbol}USDT`]) {
    let usdt = btcValue * tradingPairPrice.BTCUSDT;
    return usdt / tradingPairPrice[`${coinSymbol}USDT`];
  }

  return 'ERROR';
}

export default {
  props: {
    coinSymbol: String
  },
  setup({ coinSymbol }) {
    const coinValue = ref(0);

    btcValueSubject.subscribe(btcValue => {
      console.log("changed");
      coinValue.value = convertFromBtcValue(btcValue, coinSymbol);
    });

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
