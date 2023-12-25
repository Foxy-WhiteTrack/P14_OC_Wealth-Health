import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importez les styles CSS
import "./DatePick.css";

export default function DatePick({ id, label }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='form-ctn'>
      <label className="label">{label}</label>
      <DatePicker
        id={id}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
      />
      {/* {selectedDate && (
        <p>Date selected: {selectedDate.toDateString()}</p>
      )} */}
    </div>
  );
}
