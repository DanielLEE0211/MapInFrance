import React from "react";

export function Popup2({ isOpen, popupWidth, togglePopup }) {
    return (
        <div style={{ ...styles.popup, width: popupWidth }}>
            <p>test</p>
            <button onClick={togglePopup}>Close</button>
        </div>
    );
}

const styles = {
    popup: {
        position: 'relative',
        top: '100%',
        left: 0,
        backgroundColor: '#fff',
        padding: '10px',
        marginTop: '5px',
        zIndex: 1000,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', // Ajout d'une ombre portée pour la popup
    },
};