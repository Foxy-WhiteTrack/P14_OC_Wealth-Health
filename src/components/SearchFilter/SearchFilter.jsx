import React, { useEffect, useState } from "react";

import InputF from "../InputF/InputF";

import "./SearchFilter.css";

import { useAppContext } from '../../hooks/appContext';


export default function SearchFilter() {
    const { search, updateSearchText } = useAppContext();

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