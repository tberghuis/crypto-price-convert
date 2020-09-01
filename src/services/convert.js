import axios from "axios";
// import got from "got";
// const got = require("got");

async function convertToBtc(usdt) {
  console.log("convert to btc", usdt);

  const res = await axios.get(
    "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
  );

  const price = res.data.price;
  console.log("convertToBtc -> price", price);

  const btc = Number(usdt / price).toFixed(8);
  console.log("convertToBtc -> btc", btc); // 0.00008609

  // axios
  //   .get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
  //   .then(function(response) {
  //     // handle success
  //     console.log(response);

  //   })
  //   .catch(function(error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function() {
  //     // always executed
  //   });
}

export { convertToBtc };
