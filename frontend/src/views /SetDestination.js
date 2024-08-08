import {List} from "../components/List";

export function SetDestination() {
    const departureArrival = [
        {
            id: '0',
            text: 'From...',
            icon: './assets/broche-de-localisation.png',
            position: 'right'
        },
        {
            id: '1',
            text: 'Where to ? ',
            icon: './assets/broche-de-localisation.png',
            position: 'right'
        }
    ]

    return (
        <>
            <div>
                <div>
                    <button style={{position: 'absolute', top: '20px'}}></button>
                </div>
                <div style={{position: 'relative', textAlign: 'center', paddingTop: '5px'}}>
                    <p>Set Destination</p>
                </div>
            </div>
            <div style={{textAlign:'center', alignItems: 'center', paddingTop: '10px'}}>
                <List items={departureArrival} pointStyle="yes" />
            </div>



        </>
    )
}