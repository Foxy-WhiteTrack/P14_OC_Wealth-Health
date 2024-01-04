import React from "react";
import "./FilterOptions.css";
import Select from "../Select/Select";

import { useAppContext } from '../../hooks/appContext';

import { nbrEntries } from "../../datas/nbrEntries";

/**
 * Composant de la zone de filtrage des options de pagination.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {function} props.onPageChange - La fonction de changement de page.
 * @returns {JSX.Element} Le composant de la zone d'options de filtrage.
 */
export default function FilterOptions({ onPageChange }) {
    const { itemsPerPage, updateItemsPerPage } = useAppContext();

    /**
     * Gère le changement du nombre d'entrées par page.
     * @param {Object} event - L'événement de changement.
     */
    const handleEntriesChange = (event) => {
        const selectedValue = parseInt(event.target.value, 10);
        onPageChange(1);
        updateItemsPerPage(selectedValue);
    };

    return (
        <main>
            <div id="nbr-div" className="left-filter">
                <span>Show </span>
                <Select
                    id="nbr"
                    label=""
                    name="nbr"
                    options={nbrEntries}
                    haveLabel={false}
                    value={itemsPerPage.toString()}
                    onChange={handleEntriesChange}
                    selected={itemsPerPage.toString()}
                />
                <span> entries</span>
            </div>
        </main>
    );
}
