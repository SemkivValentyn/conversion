const getExchangeRate = () => {
  return fetch(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
  ).then((res) => res.json());
};
const convertRate = (from, to, amount) => {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "2OGEZu3aHwtKl6KCfGScNsdU6QXCtlbd");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };
  return fetch(
    `https://api.apilayer.com/exchangerates_data/convert?from=${from}&to=${to}&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};
export { getExchangeRate, convertRate };
