import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import "./DatePick.css";

export default function DatePick({ id, label, type, name, value, onChange }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    onChange({
      target: {
        name: name,
        value: date
      }
    });
  };

  return (
    <div className='form-ctn'>
      <label className="label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        required={true}
      />

    </div>
  );
}
