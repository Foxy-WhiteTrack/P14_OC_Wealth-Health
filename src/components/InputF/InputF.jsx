import React from 'react';
import './InputF.css';

export default function InputF({ id, label, type, value, onChange, error, align, name }) {
    const containerClassName = `input-ctn ${align === 'horizontal' ? 'horizontal' : 'vertical'}`;

    return (
        <div className={containerClassName}>
            <label>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={error || ''}
                name={name}
                required={true}
            />
        </div>
    );
}
