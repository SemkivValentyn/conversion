import CurrentExchangeRate from "../сurrentExchangeRate/CurrentExchangeRate";
import "./header.scss";
const Header = () => {
  let date = new Date();
  date =
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes();
  return (
    <header className="header">
      <CurrentExchangeRate />
      <p className="header__date">{date}</p>
    </header>
  );
};
export default Header;
