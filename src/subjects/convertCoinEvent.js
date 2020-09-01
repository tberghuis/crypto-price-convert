import { Subject } from "rxjs";
import { fetchTradingPairPrices } from "../data/tradingPairPrice.js";

export const convertCoinEventSubject = new Subject();

export async function nextConvertCoinEvent(coinSymbol, coinValue) {
  console.log(
    "nextConvertCoinEvent -> coinSymbol, coinValue",
    coinSymbol,
    coinValue
  );
  // fetch latest prices first??? yes

  await fetchTradingPairPrices();

  convertCoinEventSubject.next({ coinSymbol, coinValue });
}
