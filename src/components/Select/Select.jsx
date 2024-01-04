import React from "react";
import "./Select.css";

/**
 * Composant de sélection personnalisé.
 *
 * Ce composant crée un menu déroulant personnalisé avec des options spécifiées. Les options peuvent être basées sur un 
 * tableau d'objets ou un tableau de chaînes. Si le tableau d'objets est utilisé, chaque objet doit avoir un nom et une
 * abréviation. L'abréviation est utilisée comme valeur de l'option et le nom est utilisé comme libellé de l'option.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.id - L'ID du composant de sélection.
 * @param {string} props.label - Le libellé du composant de sélection.
 * @param {Array} props.options - Les options du menu déroulant.
 * @param {boolean} props.haveLabel - Indique si le composant doit afficher une étiquette.
 * @param {function} props.onChange - La fonction de rappel appelée lorsqu'une option est sélectionnée.
 * @param {string} props.name - Le nom du composant de sélection.
 * @param {string} props.selected - L'option sélectionnée par défaut.
 * @returns {JSX.Element} Le composant de sélection personnalisé.
 * @example
 * // Utilisation du composant Select
 * <Select
 *   id="mySelect"
 *   label="Sélectionnez une option"
 *   options={[
 *     { name: "Option 1", abbreviation: "opt1" },
 *     { name: "Option 2", abbreviation: "opt2" },
 *     { name: "Option 3", abbreviation: "opt3" },
 *   ]}
 *   haveLabel={true}
 *   onChange={(event) => console.log("Option sélectionnée", event.target.value)}
 *   name="mySelectName"
 *   selected="opt2"
 * />
 */
export default function Select({ id, label, options, haveLabel, onChange, name, selected }) {
    const handleSelectChange = (event) => {
        onChange(event);
    };
    return (
        <div className={"form-ctn"}>
            {haveLabel && <label>{label}</label>}
            <select id={id} name={name} onChange={handleSelectChange} value={selected}>
                {options.map(option => (
                    <option key={option.abbreviation} value={option.abbreviation}>{option.name}</option>
                ))}
            </select>
        </div>
    );
}
