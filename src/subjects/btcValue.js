import { Subject } from "rxjs";
import { convertCoinEventSubject } from "./convertCoinEvent.js";
import { tradingPairPrice } from "../data/tradingPairPrice.js";

export const btcValueSubject = new Subject();

convertCoinEventSubject.subscribe((coin) => {
  let btcValue;
  if (coin.coinSymbol == "BTC") {
    btcValue = coin.coinValue;
  } else if (coin.coinSymbol == "USDT") {
    btcValue = coin.coinValue / tradingPairPrice.BTCUSDT;
  } else if (tradingPairPrice[`${coin.coinSymbol}BTC`]) {
    btcValue = coin.coinValue * tradingPairPrice[`${coin.coinSymbol}BTC`];
  } else if (tradingPairPrice[`${coin.coinSymbol}USDT`]) {
    // todo
    // let usdt =
  }

  console.log("btcValue", btcValue);

  btcValueSubject.next(btcValue);
});
