import "./currencyInput.scss";

const CurrencyInput = () => {
  return (
    <div className="currency-input">
      <select name="currency" className="currency-input__select">
        <option value=""></option>
        <option value="">USD</option>
        <option value="">EUR</option>
      </select>
      <input type="number" className="currency-input__input" min="0" />
    </div>
  );
};

export default CurrencyInput;
