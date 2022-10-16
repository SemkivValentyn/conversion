const CurrencyInput = ({
  currencies,
  onCurrencyChange,
  onAmountChange,
  value,
  disabled
}) => {
  return (
    <div className="currency-input">
      <select
        name="currency"
        className="currency-input__select"
        onChange={(event) => {
          onCurrencyChange(event.target.value);
        }}
      >
        <option value="">Виберіть валюту</option>
        {currencies.map((currency) => {
          return (
            <option key={currency} value={currency}>
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
