
import { tradingPairPrice } from "../data/tradingPairPrice.js";

export function convertFromBtcValue(btcValue, coinSymbol) {
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
