import React, { useEffect, useState } from "react";

import "./FilterOptions.css";

import Select from "../Select/Select";

import { nbrEntries } from "../../datas/nbrEntries";

export default function FilterOptions() {

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
                />
                <span> entries</span>
            </div>
        </main>
    );

}