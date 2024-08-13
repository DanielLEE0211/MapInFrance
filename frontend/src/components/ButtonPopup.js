import React, { useState, useRef, useEffect } from 'react';
import {Popup1} from "./Popup1";
import {Popup2} from "./Popup2";

export function ButtonPopup({ name, component: Component, propsList }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [popupWidth, setPopupWidth] = useState(0);
    const buttonRef = useRef(null);


    // Fonction pour ouvrir/fermer la popup
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    // Utilisation de useEffect pour obtenir la largeur du bouton
    useEffect(() => {
        if (buttonRef.current) {
            setPopupWidth(buttonRef.current.offsetWidth);
        }
    }, [buttonRef.current]);

    // Définir les couleurs en fonction de l'état
    const getButtonStyle = () => {
        let color = 'black'; // Couleur par défaut
        if (isActive) {
            color = 'orange'; // Couleur lors du clic
        } else if (isHovered) {
            color = 'orange'; // Couleur lors du survol
        }

        return {
            ...styles.button,
            color: color,
        };
    };

    return (
        <div style={styles.container}>
            {/* Bouton pour ouvrir la popup */}
            <button
                ref={buttonRef}
                onClick={togglePopup}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseDown={() => setIsActive(true)}
                onMouseUp={() => setIsActive(false)}
                style={getButtonStyle()}
            >
                {name}
            </button>

            {/* Affichage conditionnel de la popup */}
            {isOpen && (
                <>
                    <Component {...propsList} togglePopup={togglePopup}/>
                </>

            )}
        </div>
    );
}

// Styles en ligne
const styles = {
    container: {
        position: 'relative',
        display: 'inline-block',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '4px',
        border: '2px solid black',
        cursor: 'pointer',
        transition: 'color 0.3s ease', // Pour une transition fluide
    },
    popup: {
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: '#fff',
        padding: '10px',
        marginTop: '5px',
        zIndex: 1000,
    },
};


