import './currency.scss'

const Currency = ({ imgUrl, name, rate }) => {
    return (
        <div className='currency'>
            <div className="exchange-rate">
                <img
                    src={imgUrl}
                    alt={name}
                    className="exchange-rate__img"
                    width="28px"
                    height="28px"
                />
                <h3 className='exchange-rate__name'>{name}</h3>
                <p className='exchange-rate__rate'>{rate}</p>
            </div>


        </div>
    )
}


export default Currency;