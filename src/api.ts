// export function fetchCoins() {
//   // promise 사용하는 방법
//   return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
//     response.json()
//   );
// }

export async function fetchCoins() {
  // await & async 사용

  const response = await fetch("https://api.coinpaprika.com/v1/coins");
  const json = await response.json();
  return json;
}
