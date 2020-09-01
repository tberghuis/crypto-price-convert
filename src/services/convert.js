import axios from "axios";
// import got from "got";
// const got = require("got");

function convertToBtc(usdt) {
  console.log("convert to btc", usdt);

  // (async () => {
  //   try {
  //     const response = await got("https://sindresorhus.com");
  //     console.log(response.body);
  //     //=> '<!doctype html> ...'
  //   } catch (error) {
  //     console.log(error.response.body);
  //     //=> 'Internal server error ...'
  //   }
  // })();

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
