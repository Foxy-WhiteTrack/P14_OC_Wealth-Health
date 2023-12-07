import React from 'react';
import './InputF.css';

export default function InputF({ id, label, type = "text", value, onChange, error }) {

    return (
        <div className={"form-ctn"}>
            <label >{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={error || ''}
            />
        </div>
    );
}
