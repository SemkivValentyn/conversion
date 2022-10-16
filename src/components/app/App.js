import CurrencyConverter from "../currencyConverter/CurrencyConverter";
import Header from "../header/Header";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <CurrencyConverter />
    </div>
  );
};
export default App;
