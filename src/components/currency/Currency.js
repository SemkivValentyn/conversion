import "./currency.scss";
const Currency = ({ imgUrl, name, rate, code }) => {
  return (
    <div>
      <div className="currency">
        <img
          src={imgUrl}
          alt={name}
          className="currency__img"
          width="28px"
          height="28px"
        />
        <div className="currency__name-containers">
          <div className="currency__code">{code}</div>
          <div className="currency__name">{name}</div>
        </div>
        <p className="currency__rate">{rate}</p>
      </div>
    </div>
  );
};
export default Currency;
