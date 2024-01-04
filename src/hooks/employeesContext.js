import React, { createContext, useContext, useState } from 'react';
import employeeMock from '../datas/employeeMock';

/**
 * Contexte pour gérer la liste des employés.
 * @typedef {Object} EmployeesContextType
 * @property {Array} employees - La liste des employés.
 * @property {Function} addEmployee - Fonction pour ajouter un employé à la liste.
 */

const EmployeesContext = createContext(/** @type {EmployeesContextType} */(''));

/**
 * Hook pour accéder au contexte des employés.
 * @returns {EmployeesContextType} Le contexte des employés.
 */
export const useEmployeesContext = () => {
    return useContext(EmployeesContext);
};

/**
 * Composant pour fournir un contexte de gestion des employés.
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {React.ReactNode} props.children - Les éléments enfants.
 * @returns {JSX.Element} Le composant de contexte des employés.
 */
export const EmployeesProvider = ({ children }) => {
    const [employees, setEmployees] = useState([...employeeMock]);

    /**
     * Fonction pour ajouter un employé à la liste des employés.
     * @param {Object} newEmployee - Les données du nouvel employé à ajouter.
     */
    const addEmployee = (newEmployee) => {
        setEmployees([...employees, newEmployee]);
    };

    return (
        <EmployeesContext.Provider value={{ employees, addEmployee }}>
            {children}
        </EmployeesContext.Provider>
    );
};
