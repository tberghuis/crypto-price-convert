<template>
  <div>
    <div>
      USD
      <input v-model="usdt" />
      <button @click="convertToBtc">convert</button>
    </div>
    <div>
      BTC
      <input v-model="btc" />
      <button @click="convertToUsdt">convert</button>
    </div>
    <Eth></Eth>
  </div>
</template>

<script>
import { convertToBtc } from "../services/convert.js";
import Eth from "./Eth.vue";

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
    Eth
  }
};
</script>


<style scoped>
</style>
