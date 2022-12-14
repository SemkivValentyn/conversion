import { useCallback, useEffect, useState } from "react";
import { convertRate } from "../../services/ExchangeRateServices";
import CurrencyInput from "../currencyInput/CurrencyInput";
import debounce from "../../helpers/debounce";

import "./currencyConverter.scss";

const DEBOUNCE_TIMEOUT = 500;

const CurrencyConverter = () => {
  const defaultFrom = "USD";
  const defaultTo = "UAH";
  const [from, setFrom] = useState(defaultFrom);
  const [to, setTo] = useState(defaultTo);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const currecnyToShow = ["USD", "EUR", "UAH"];
  const [fromEditing, setFromEditing] = useState(false);
  const [toEditing, setToEditing] = useState(false);

  const handleFromValueChange = useCallback(
    debounce((amount) => {
      if (amount === "" || !from || !to) {
        setFromEditing(false);
        return;
      }
      convertRate(from, to, amount).then((result) => {
        setToValue(result.result);
        setFromEditing(false);
      });
    }, DEBOUNCE_TIMEOUT),
    [from, to]
  );

  const handleToValueChange = useCallback(
    debounce((amount) => {
      if (amount === "" || !from || !to) {
        setToEditing(false);
        return;
      }
      convertRate(to, from, amount).then((result) => {
        setFromValue(result.result);
        setToEditing(false);
      });
    }, DEBOUNCE_TIMEOUT),
    [from, to]
  );

  useEffect(() => {
    if (fromValue === "" || toValue === "") {
      return;
    }
    convertRate(from, to, fromValue).then((result) => {
      setToValue(result.result);
    });
  }, [from, to]);

  return (
    <div className="currency-convertor">
      <h1 className="currency-convertor__title">Конвертація Валюти</h1>
      <div className="currecny-block">
        <CurrencyInput
          currencies={currecnyToShow}
          value={fromValue}
          onCurrencyChange={setFrom}
          disabled={toEditing}
          defaultCurrency={defaultFrom}
          onAmountChange={(amount) => {
            setFromEditing(true);
            setFromValue(amount);
            if (amount === "") {
              setToValue("");
            }
            handleFromValueChange(amount);
          }}
        />
        <CurrencyInput
          currencies={currecnyToShow}
          value={toValue}
          onCurrencyChange={setTo}
          disabled={fromEditing}
          defaultCurrency={defaultTo}
          onAmountChange={(amount) => {
            setToEditing(true);
            setToValue(amount);
            if (amount === "") {
              setFromValue("");
            }
            handleToValueChange(amount);
          }}
        />
      </div>
    </div>
  );
};
export default CurrencyConverter;
