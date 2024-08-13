import React from 'react';

import List from "../components/List";
import {SearchBar} from "../components/SearchBar"; // Assurez-vous que SearchBar est correctement importé

export function SetDestination() {
    const departureArrival = [
        {
            text: 'From...',
            icon: './assets/broche-de-localisation.png',
            position: 'left'
        },
        {
            text: 'Where to ?',
            icon: './assets/broche-de-localisation.png',
            position: 'right'
        },

    ];

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
            <div style={{textAlign: 'center', alignItems: 'center', paddingTop: '10px'}}>
                <List component={SearchBar} propsList={departureArrival} stylepoint={false} />
            </div>
        </>
    );
}
