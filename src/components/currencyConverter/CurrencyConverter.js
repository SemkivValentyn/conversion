import { useState, useEffect } from 'react';
import { getExchangeRate } from '../../services/ExchangeRateServices';

import CurrencyInput from '../currencyInput/CurrencyInput';

import './currencyConverter.scss'

const CurrencyConverter = () => {
    const [currencies, setCurrencies] = useState([])

    useEffect(() => {
        getExchangeRate()
            .then(setCurrencies)
    }, []);

    return (
        <div className='currency-convertor'>
            <h1 className='currency-convertor__title'>Конвертація Валюти</h1>
            <div className='currecny-block'>
                <CurrencyInput />
                <CurrencyInput />
            </div>
        </div>
    )
}


export default CurrencyConverter;