import React, { useState } from "react";
import Modal from 'react-modal';

import "./Form.css";

import InputF from "../InputF/InputF";
import Select from "../Select/Select";

import { states } from "../../datas/states";
import { departments } from "../../datas/department";

import { useAppContext } from '../../hooks/appContext';

/**
 * Composant de formulaire pour ajouter un nouvel employé.
 *
 * Ce composant affiche un formulaire permettant à l'utilisateur d'ajouter un nouvel employé en saisissant des informations telles que le prénom, le nom, la date de naissance, etc.
 *
 * @component
 * @example
 * // Utilisation du composant Form
 * <Form />
 */
export default function Form() {
    const { addEmployee } = useAppContext();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    // initialiser les valeurs par défaut des champs select
    const firstState = states[0].abbreviation;
    const firstDepartment = departments[0].abbreviation;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        department: firstDepartment,
        street: "",
        city: "",
        state: firstState,
        zipCode: "",
    })

    /**
     * Fonction de gestion de changement de champ de saisie.
     *
     * Cette fonction est appelée chaque fois qu'un champ de saisie est modifié.
     *
     * @param {Object} e - L'événement de changement.
     */
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    /**
     * Fonction de soumission du formulaire.
     *
     * Cette fonction est appelée lorsque l'utilisateur soumet le formulaire. Elle enregistre les données du formulaire et ouvre une modale de confirmation.
     *
     * @param {Object} event - L'événement de soumission du formulaire.
     */
    const submit = async (event) => {
        event.preventDefault();
        saveDatas(event);
    };

    /**
     * Fonction pour sauvegarder les données du formulaire.
     *
     * Cette fonction ajoute les données du formulaire à la liste des employés et ouvre une modale de confirmation.
     *
     * @param {Object} e - L'événement de sauvegarde.
     */
    async function saveDatas(e) {
        addEmployee(formData);

        // Ouvrir la modale
        openModal();
    }

    return (
        <form className="form" onSubmit={submit}>
            <div className="part-form">
                <InputF
                    id="firstName"
                    label="First Name"
                    align="vertical"
                    name="firstName"
                    value={formData.firstName}
                    onChange={onChange}
                />
                <InputF
                    id="lastName"
                    label="Last Name"
                    align="vertical"
                    name="lastName"
                    value={formData.lastName}
                    onChange={onChange}
                />
                <InputF
                    id="dateOfBirth"
                    type="date"
                    label="Date of Birth"
                    align="vertical"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={onChange}
                />
                <InputF
                    id="startDate"
                    label="Start Date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={onChange}
                    type="date"
                    align="vertical"
                />
            </div>
            <div className="part-form">
                <div className="adress">
                    <InputF
                        id="street"
                        label="Street"
                        type="text"
                        align="vertical"
                        name="street"
                        value={formData.street}
                        onChange={onChange}
                    />
                    <InputF
                        id="city"
                        label="City"
                        type="text"
                        align="vertical"
                        name="city"

                        value={formData.city}
                        onChange={onChange}
                    />
                    <Select
                        id="state"
                        label="State"
                        options={states}
                        haveLabel={true}
                        name="state"
                        value={formData.state}
                        onChange={onChange}
                    />
                    <InputF
                        id="zipcode"
                        label="Zip Code"
                        align="vertical"
                        name="zipCode"

                        value={formData.zipCode}
                        onChange={onChange}
                    />
                </div>
                <Select
                    id="department"
                    label="Department"
                    options={departments}
                    haveLabel={true}
                    name="department"
                    value={formData.department}
                    onChange={onChange}
                />

            </div>
            <div>
                <button className="modal-btn" type="submit">Save</button>
                <Modal
                    className="modal"
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Confirmation Modal"
                >
                    <h2>Confirmation de l'ajout</h2>
                    <p>Les données ont été enregistrées avec succès.</p>
                    <button className="close-btn-modal" onClick={closeModal}>Fermer</button>
                </Modal>
            </div>
        </form>
    );
}
