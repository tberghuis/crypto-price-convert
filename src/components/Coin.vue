<template>
  <div>
    {{ coinSymbol }}
    <input
      @focus="$event.target.select()"
      @keyup.enter="convert"
      v-model="coinValue"
    />
    <button @click="convert">convert</button>
  </div>
</template>

<script>
import { nextConvertCoinEvent } from "../subjects/convertCoinEvent.js";
import { btcValueSubject } from "../subjects/btcValue.js";
import { convertFromBtcValue } from "../services/convert.js";
import { ref, reactive } from "vue";

// let currentCoinSymbolConverting = "TODO";

export default {
  props: {
    coinSymbol: String
  },
  setup({ coinSymbol }) {
    const coinValue = ref(0);

    btcValueSubject.subscribe(btcValue => {
      // dont update if current coint is self
      // doesn't work if same coin added twice
      // if (currentCoinSymbolConverting === coinSymbol) {
      //   return;
      // }
      coinValue.value = convertFromBtcValue(btcValue, coinSymbol);
    });

    const convert = async () => {
      // currentCoinSymbolConverting = coinSymbol;
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
