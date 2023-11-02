// export function fetchCoins() {
//   // promise 사용하는 방법
//   return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
//     response.json()
//   );
// }

const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  // await & async 사용
  const response = await fetch(`${BASE_URL}/coins`);
  const json = await response.json();
  return json;
}

export async function fetchCoinInfo(coinId: string) {
  const response = await fetch(`${BASE_URL}/coins/${coinId}`);
  const json = await response.json();
  return json;
}

export async function fetchCoinTickers(coinId: string) {
  // return fetch(`${BASE_URL}/tickers/${coinId}`).then(
  //   (response) => response.json
  // );
  const response = await fetch(`${BASE_URL}/tickers/${coinId}`);
  const json = await response.json();
  return json;
}

export async function fetchCoinHistory(coinId: string) {
  const response = await fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  );
  const json = await response.json();
  return json;
}
