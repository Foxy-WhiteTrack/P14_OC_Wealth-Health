import React from "react";
import InputF from "../InputF/InputF";
import "./SearchFilter.css";
import { useAppContext } from '../../hooks/appContext';

/**
 * Composant pour gérer la zone de filtre de recherche.
 * @component
 * @returns {JSX.Element} Le composant de filtre de recherche.
 */
export default function SearchFilter() {
    const { search, updateSearchText } = useAppContext();

    /**
     * Fonction de gestion du changement de texte de recherche.
     * @param {Object} event - L'événement de changement d'entrée de texte.
     */
    const onChange = (event) => {
        const selectedTextValue = event.target.value;
        updateSearchText(selectedTextValue);
    };

    return (
        <div className="right-filter">
            <InputF
                id="search"
                label="Search:"
                type="text"
                align="horizontal"
                value={search}
                onChange={onChange}
            />
        </div>
    );
}
