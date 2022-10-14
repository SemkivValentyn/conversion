


const ExchangeRate = () => {

    const getResource = async () => {
        let res = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')

        return await res.json()
    }


    return {
        getResource
    }

}

export default ExchangeRate;