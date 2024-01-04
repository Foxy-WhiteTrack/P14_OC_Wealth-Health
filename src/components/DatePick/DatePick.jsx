import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import "./DatePick.css";

/**
 * Composant de sélection de date.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.id - L'identifiant du champ de date.
 * @param {string} props.label - Libellé du champ de date.
 * @param {string} props.type - Le type du champ de date (e.g., 'date').
 * @param {string} props.name - Le nom du champ de date.
 * @param {string} props.value - La valeur du champ de date.
 * @param {Function} props.onChange - La fonction de rappel appelée lorsqu'une date est sélectionnée.
 * @returns {JSX.Element} Le composant de sélection de date.
 */
export default function DatePick({ id, label, type, name, value, onChange }) {
  const [selectedDate, setSelectedDate] = useState(null);

  /**
   * Gère le changement de date.
   * @param {Date} date - La date sélectionnée.
   */
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
