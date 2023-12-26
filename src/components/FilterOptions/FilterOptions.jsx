// FilterOptions.jsx
import React from "react";
import "./FilterOptions.css";
import Select from "../Select/Select";

import { useAppContext } from '../../hooks/appContext';

import { nbrEntries } from "../../datas/nbrEntries";

export default function FilterOptions() {
    const { itemsPerPage, updateItemsPerPage } = useAppContext();

    const handleEntriesChange = (event) => {
        const selectedValue = parseInt(event.target.value, 10);
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
                    value={itemsPerPage.toString()} // Assurez-vous que la valeur du Select correspond à itemsPerPage
                    onChange={handleEntriesChange}
                />
                <span> entries</span>
            </div>
        </main>
    );
}