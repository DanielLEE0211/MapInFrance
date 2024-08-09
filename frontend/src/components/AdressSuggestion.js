export function AdressSuggestion({name, number, town, region, country, postalCode, icon}) {
    return (
        <div style={{display: 'flex', boxShadow: '0px 4px 10px black'}}>
            <img src={icon} alt='mauvaise path' style={{width: '40px', height: '40px', marginRight:'10px'}}/>
            <div>
                <div>
                    <b>{name}</b>
                </div>
                <div>
                    <p style={{fontSize: '10px'}}>{number}, {postalCode} {town}, {region}, {country}</p>
                </div>
            </div>

        </div>
    )
}