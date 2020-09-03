const axios = require("axios");

let baseAssetOrdered = [];
const coinGeckoNames = {};
const binanceNames = {};

async function fetchBaseAssetList() {
  const response = await axios.get(
    "https://api.binance.com/api/v3/exchangeInfo"
  );
  const symbols = response.data.symbols;

  const baseAsset = symbols
    .filter((symbol) => symbol.status === "TRADING")
    .filter((symbol) => symbol.permissions.includes("SPOT"))
    .map((symbol) => symbol.baseAsset);

  const baseAssetSet = new Set(baseAsset);
  baseAssetOrdered = [...baseAssetSet].sort();

  console.log(baseAssetOrdered);
}

async function fetchCoinGeckoNames() {
  const res = await axios.get("https://api.coingecko.com/api/v3/coins/list");
  // console.log("fetchCoinGeckoNames -> res", res.data);

  const symbolArray = res.data.map((coin) => coin.symbol);
  console.log("fetchCoinGeckoNames -> symbolArray", symbolArray.length);

  const symbolSet = new Set(symbolArray);
  const symbolSetRemoveDup = new Set(symbolArray);
  console.log("fetchCoinGeckoNames -> symbolSet", symbolSet.size);

  symbolSet.forEach((sym) => {
    if (symbolArray.filter((sa) => sa === sym).length > 1) {
      // console.log("dup", sym);
      symbolSetRemoveDup.delete(sym);
    }
  });

  symbolSetRemoveDup.forEach((sym) => {
    for (let coin of res.data) {
      if (coin.symbol === sym) {
        // todo uppercase
        coinGeckoNames[sym.toUpperCase()] = coin.name;
        break;
      }
    }
  });

  console.log("coinGeckoNames", coinGeckoNames);
  // debugger;
}

async function createBinanceNames() {
  for (let coinSymbol of baseAssetOrdered) {
    if (coinGeckoNames[coinSymbol]) {
      binanceNames[coinSymbol] = coinGeckoNames[coinSymbol];
    } else {
      binanceNames[coinSymbol] = null;
    }
  }
  console.log("binanceNames", binanceNames);

  console.log(JSON.stringify(binanceNames));
  // debugger;
}

async function run() {
  await fetchCoinGeckoNames();
  await fetchBaseAssetList();
  await createBinanceNames();
}

run();
