import React, { useState, useRef } from "react"
import { Link } from "react-router-dom"
import Modal from 'react-modal';

import "./Form.css";

import InputF from "../InputF/InputF";
import Select from "../Select/Select";
import DatePick from "../DatePick/DatePick";

import { states } from "../../datas/states";
import { departement } from "../../datas/department";

// import Modal from "../Modal/Modal"
import { handleOpenModal } from "../../utils/Utils"

export default function Form() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        birthdate: "",
        starter: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        department: "",
    })

    // événement de soumission du formulaire
    const onChange = (e) => {
        const { name, value } = e.target
        setFormData((initialDatas) => ({ ...initialDatas, [name]: value }))
    }

    // sauver les données du formulaire
    async function saveDatas(e) {
        e.preventDefault();

        const newEmployee = { ...formData }
        console.log(newEmployee)

        // récupérer les datas du localStorage
        const employees = JSON.parse(localStorage.getItem("employees")) || []
        employees.push(newEmployee)

        // sauvegarder les datas dans le localStorage
        localStorage.setItem("employees", JSON.stringify(employees))

        // Ouvrir la modale
        openModal();
    }


    return (
        <form className="form">
            <div className="part-form">
                <InputF
                    id="firstName"
                    label="First Name"
                />
                <InputF
                    id="lastName"
                    label="Last Name"
                />
                <DatePick
                    id="birthday"
                    label="Date of Birth"
                />
                <DatePick
                    id="startdate"
                    label="Start Date"
                />
            </div>
            <div className="part-form">
                <div className="adress">
                    <InputF
                        id="street"
                        label="Street"
                        type="text"

                        // value={formData.street}
                        onChange={onChange}
                    />
                    <InputF
                        id="city"
                        label="City"
                        type="text"

                        // value={formData.city}
                        onChange={onChange}
                    />
                    <Select
                        id="state"
                        label="State"
                        options={states}
                    />
                    <InputF
                        id="zipcode"
                        label="Zip Code"
                    />
                </div>
                <Select
                    id="departement"
                    label="Department"
                    name="department"
                    options={departement}

                    value={formData.department}
                    onChange={onChange}
                />


            </div>
            <div>
                <button className="modal-btn" onClick={saveDatas}>Save</button>
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