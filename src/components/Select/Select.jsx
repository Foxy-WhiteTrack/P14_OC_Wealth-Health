import React from "react";
import "./Select.css";

export default function Select({ id, label, options, haveLabel }) {

    return (
        <div className={"form-ctn"}>
            {haveLabel &&
                <label >{label}</label>
            }
            <select id={id}>
                {options.map(option => (
                    <option key={option.abbreviation} value={option.name}>{option.name}</option>
                ))}
            </select>
        </div>
    );
}
