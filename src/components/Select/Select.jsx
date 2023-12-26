import React from "react";
import "./Select.css";

export default function Select({ id, label, options, haveLabel, onChange }) {
    const handleSelectChange = (event) => {
        onChange(event);
    };
    return (
        <div className={"form-ctn"}>
            {haveLabel &&
                <label >{label}</label>
            }
            <select id={id} onChange={handleSelectChange}>
                {options.map(option => (
                    <option key={option.abbreviation} value={option.name}>{option.name}</option>
                ))}
            </select>
        </div>
    );
}
