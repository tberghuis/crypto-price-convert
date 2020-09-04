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
    let usdt = coin.coinValue * tradingPairPrice[`${coin.coinSymbol}USDT`];
    // console.log("usdt", usdt);
    btcValue = usdt / tradingPairPrice.BTCUSDT;
  }
  // todo add tradingPairPrice[`BTC${coin.coinSymbol}`]

  // console.log("btcValue", btcValue);

  btcValueSubject.next(btcValue);
});
