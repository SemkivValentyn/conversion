const CurrencyInput = ({
  currencies,
  onCurrencyChange,
  onAmountChange,
  value,
  disabled,
  defaultCurrency
}) => {
  return (
    <div className="currency-input">
      <select
        name="currency"
        className="currency-input__select"
        onChange={(event) => {
          onCurrencyChange(event.target.value);
        }}
        defaultValue={defaultCurrency}
      >
        {currencies.map((currency) => {
          return (
            <option key={currency} value={currency} >
              {currency}
            </option>
          );
        })}
      </select>
      <input
        type="number"
        disabled={disabled}
        className="currency-input__input"
        value={value}
        onChange={(event) => {
          onAmountChange(event.target.value);
        }}
        min="0"
      />
    </div>
  );
};
export default CurrencyInput;
