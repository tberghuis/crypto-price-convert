const got = require("got");
















/////////////////////
// functions below //
/////////////////////

// get list of baseAssets

async function gotapitest() {
  const {
    body: { symbols },
  } = await got.get("https://api.binance.com/api/v3/exchangeInfo", {
    responseType: "json",
  });
  // console.log("gotapitest -> body", body);

  debugger;
}
