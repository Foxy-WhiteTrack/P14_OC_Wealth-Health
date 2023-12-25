import React, { useEffect, useState } from "react";

import InputF from "../InputF/InputF";

import "./SearchFilter.css";



export default function SearchFilter() {

    return (
        <div className="right-filter">
            <InputF
                id="search"
                label="Search:"
                type="text"
                align="horizontal"

            // onChange={onChange}
            />
        </div>
    );

}