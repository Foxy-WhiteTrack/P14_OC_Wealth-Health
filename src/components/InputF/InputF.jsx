import React from 'react';
import './InputF.css';

/**
 * Composant d'entrée de formulaire.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.id - L'ID de l'élément d'entrée.
 * @param {string} props.label - Le libellé de l'entrée.
 * @param {string} props.type - Le type d'entrée (par exemple, "text", "date").
 * @param {string} props.value - La valeur de l'entrée.
 * @param {function} props.onChange - La fonction de rappel appelée lorsqu'une modification se produit.
 * @param {string} props.error - Le message d'erreur à afficher (s'il y a une erreur).
 * @param {string} props.align - L'alignement de l'entrée ("horizontal" ou "vertical").
 * @param {string} props.name - Le nom de l'entrée.
 * @returns {JSX.Element} Le composant d'entrée de formulaire.
 */
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
