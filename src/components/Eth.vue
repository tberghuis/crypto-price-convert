<template>
  <div>eth {{ eth }}</div>
</template>

<script>
import { btcValueSubject } from "../subjects/btcValue.js";
import { ref, reactive } from "vue";


// type of coin passed in by prop

export default {
  setup() {
    const eth = ref(0);

    btcValueSubject.subscribe((btcValue) => {
      console.log("changed");
      eth.value = btcValue;
    });

    // expose to template
    return {
      eth
    };
  }
};
</script>


<style scoped>
</style>
