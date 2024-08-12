import {SearchBar} from "./SearchBar";


import React from 'react';

// Composant List
const List = ({ component: Component, stylepoint = true, propsList }) => {
    return (
        <ul style={{ listStyleType: stylepoint ? 'disc' : 'none' }}>
            {propsList.map((props, index) => (
                <li key={index}>
                    <Component {...props} />
                </li>
            ))}
        </ul>
    );
};

export default List;