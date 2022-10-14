import Currency from "../currency/Currency";

import { useState, useEffect } from "react";
import { getExchangeRate } from '../../services/ExchangeRateServices';

import './currentExchangeRate.scss'

const CurrentExchangeRate = () => {
    const [loading, setLoading] = useState(true);
    const [usdtoUah, setUsdToUah] = useState(null);
    const [eurotoUah, setEuroToUah] = useState(null);

    useEffect(() => {
        getExchangeRate()
            .then((data) => {
                const usd = data.find((currency) => {
                    return currency.cc === 'USD';
                });

                const euro = data.find((currency) => {
                    return currency.cc === 'EUR';
                });

                setUsdToUah(usd);
                setEuroToUah(euro);

                setLoading(false)
            });

        // If get exchange rate request fails?
        // if get exchange rate has no USD or Eur?

        // eslint-disable-next-line
    }, [])


    if (loading) {
        return "Loading..."
    }

    return (usdtoUah && eurotoUah) ? (
        <div className="currencies">

            <Currency
                imgUrl="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                name={usdtoUah.txt}
                rate={usdtoUah.rate}
            />
            <hr />
            <Currency
                imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/800px-Flag_of_Europe.svg.png?20081021155534"
                name={eurotoUah.txt}
                rate={eurotoUah.rate}
            />
        </div>


    ) : (<p>No data</p >);

}

export default CurrentExchangeRate;