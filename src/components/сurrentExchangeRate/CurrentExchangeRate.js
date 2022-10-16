import Currency from "../currency/Currency";

import { useState, useEffect } from "react";
import { getExchangeRate } from "../../services/ExchangeRateServices";

import "./currentExchangeRate.scss";

const CurrentExchangeRate = () => {
  const [loading, setLoading] = useState(true);
  const [currencies, setCurrencies] = useState([]);

  const currenciesToShow = ["USD", "EUR"];

  useEffect(() => {
    getExchangeRate().then((data) => {
      setCurrencies(
        data.filter((currency) => {
          return currenciesToShow.indexOf(currency.cc) > -1;
        })
      );

      setLoading(false);
    });
  }, []);

  if (loading) {
    return "Loading...";
  }

  return currencies.length ? (
    <div className="currencies">
      {currencies.map((currency) => (
        <Currency
          key={currency.r030}
          imgUrl={`/flags/${currency.cc.toLowerCase()}.svg`}
          name={currency.txt}
          rate={currency.rate}
          code={currency.cc}
        />
      ))}
    </div>
  ) : (
    <p>No data</p>
  );
};

export default CurrentExchangeRate;
