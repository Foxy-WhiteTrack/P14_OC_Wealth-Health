import { createContext, useEffect, useState } from "react";
import { dataMock } from './../datas/department';

/**
 * Contexte de données pour gérer les informations d'employés.
 * @typedef {Object} DataContextType
 * @property {Object} datas - Les données actuelles de l'employé.
 * @property {Object} datasChange - Les données d'employé en cours de modification.
 * @property {Array} employees - La liste des employés.
 * @property {Function} addEmployee - Fonction pour ajouter un employé.
 * @property {Function} updateEmployee - Fonction pour mettre à jour les données d'un employé.
 * @property {Function} resetDatas - Fonction pour réinitialiser les données d'employé.
 * @property {Array} states - Liste des états.
 * @property {Array} departments - Liste des départements.
 * @property {string} departement - Le département actuel.
 * @property {Object} initialDatas - Les données initiales de l'employé.
 */

export const DataContext = createContext(/** @type {DataContextType} */(''));

const initialDatas = {
    firstName: '',
    lastName: '',
    startDate: '',
    birthdate: '',
    departement: dataMock.departement[0].name,
    street: '',
    city: '',
    state: dataMock.states[0].name,
    zip: '',
};

/**
 * Composant pour fournir un contexte de données d'employé.
 *
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {React.ReactNode} props.children - Les éléments enfants.
 * @returns {JSX.Element} Le composant de contexte de données.
 */
export const DatasProvider = ({ children }) => {

    const [datas, setDatas] = useState(initialDatas);
    const [employees, setEmployees] = useState([]);

    const datasChange = {
        firstName,
        lastName,
        startDate,
        birthdate,
        departement,
        street,
        city,
        state,
        zip,
    }

    useEffect(() => {
        const getEmployees = JSON.parse(localStorage.getItem('employees'));
        if (getEmployees) {
            setEmployees(getEmployees);
        }
    }, []);

    /**
     * Fonction pour ajouter un employé à la liste des employés.
     * @param {Object} employee - Les données de l'employé à ajouter.
     */
    const addEmployee = (employee) => {
        const newEmployees = [...employees, employee];
        setEmployees(newEmployees);
        localStorage.setItem('employees', JSON.stringify(newEmployees));
    }

    /**
     * Fonction pour mettre à jour les données d'un employé.
     * @param {string} addedEmployee - Le nom du champ d'employé à mettre à jour.
     * @param {string} value - La nouvelle valeur pour le champ d'employé.
     */
    const updateEmployee = (addedEmployee, value) => {
        setDatas({ ...datas, [addedEmployee]: value });
    };

    /**
     * Fonction pour réinitialiser les données d'employé aux valeurs initiales.
     */
    const resetDatas = () => {
        setDatas(initialDatas);
    };

    return (
        <DataContext.Provider value={{
            datas,
            datasChange,
            employees,
            addEmployee,
            updateEmployee,
            resetDatas,
            states: dataMock.states,
            departments: dataMock.departments,
            departement,
            initialDatas,
        }}>
            {children}
        </DataContext.Provider>
    );
};
