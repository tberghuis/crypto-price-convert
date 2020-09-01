import axios from "axios";

export const tradingPairPrice = {
  LTCBTC: 0.005269,
};

export async function fetchTradingPairPrices() {
  const res = await axios.get("https://api.binance.com/api/v3/ticker/price");
  console.log("fetchTradingPairPrices -> res", res);
  return res;
}
