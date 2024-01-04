import React from "react";
import "./Select.css";

export default function Select({ id, label, options, haveLabel, onChange, name, selected }) {
    const handleSelectChange = (event) => {
        onChange(event);
    };
    return (
        <div className={"form-ctn"}>
            {haveLabel &&
                <label >{label}</label>
            }
            <select id={id} name={name} onChange={handleSelectChange} value={selected}>
                {options.map(option => (
                    <option key={option.abbreviation} name={option.name} value={option.abbreviation} >{option.name}</option>
                ))}
            </select>
        </div>
    );
}
