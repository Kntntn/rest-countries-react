const Card = ({ country, openDetails }) => {

    return (
        <div className="card" value={country.name} onClick={() => openDetails(country.name)}>
            <img src={country.flag} alt="Flag"/>
            <div className="info">
                <h4 className="country">{country.name}</h4>
                <p className="population"><span>Population:</span> {country.population}</p>
                <p className="region"><span>Region:</span> {country.region}</p>
                <p className="captial"><span>Capital:</span> {country.capital}</p>
            </div>
        </div>
    )
}

export default Card
