import axios from "axios";
// const got = require("got");

function convertToBtc(usdt) {
  console.log("convert to btc", usdt);

  axios
    .get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
    .then(function(response) {
      // handle success
      console.log(response);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
    });
}

export { convertToBtc };
