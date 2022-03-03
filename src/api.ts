const BASE_URL = "https://api.coinpaprika.com/v1";

export function coninList() {
  return fetch(`${BASE_URL}/coins`).then((reponse) => reponse.json());
}
