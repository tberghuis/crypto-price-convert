import { Subject } from "rxjs";

export const btcValueSubject = new Subject();

// toremove
window.btcValueSubject = btcValueSubject;

export function convertCoinValueToBtcValue(coinSymbol, coinValue) {
  console.log("convertCoinValueToBtcValue");
}
