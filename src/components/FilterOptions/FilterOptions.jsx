// FilterOptions.jsx
import React from "react";
import "./FilterOptions.css";
import Select from "../Select/Select";

import { useAppContext } from '../../hooks/appContext';

import { nbrEntries } from "../../datas/nbrEntries";

export default function FilterOptions({ onPageChange }) {
    const { itemsPerPage, updateItemsPerPage } = useAppContext();

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