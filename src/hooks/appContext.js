import React, { createContext, useContext, useState } from 'react';

/**
 * Contexte pour gérer les données de l'application.
 * @typedef {Object} AppContextType
 * @property {number} itemsPerPage - Le nombre d'éléments par page.
 * @property {Function} updateItemsPerPage - Fonction pour mettre à jour le nombre d'éléments par page.
 * @property {string} search - Le texte de recherche.
 * @property {Function} updateSearchText - Fonction pour mettre à jour le texte de recherche.
 * @property {Array} employees - La liste des employés.
 * @property {Function} addEmployee - Fonction pour ajouter un employé à la liste.
 */

const AppContext = createContext(/** @type {AppContextType} */(''));

/**
 * Hook pour accéder au contexte de l'application.
 * @returns {AppContextType} Le contexte de l'application.
 */
export const useAppContext = () => {
  return useContext(AppContext);
};

/**
 * Composant pour fournir un contexte de gestion des données de l'application.
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {React.ReactNode} props.children - Les éléments enfants.
 * @returns {JSX.Element} Le composant de contexte de l'application.
 */
export const AppProvider = ({ children }) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);

  /**
   * Fonction pour mettre à jour le nombre d'éléments par page.
   * @param {number} newItemsPerPage - Le nouveau nombre d'éléments par page.
   */
  const updateItemsPerPage = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
  };

  const [search, setSearch] = useState('');

  /**
   * Fonction pour mettre à jour le texte de recherche.
   * @param {string} newSearchText - Le nouveau texte de recherche.
   */
  const updateSearchText = (newSearchText) => {
    setSearch(newSearchText);
  };

  const [employees, setEmployees] = useState([]);

  /**
   * Fonction pour ajouter un employé à la liste des employés.
   * @param {Object} employee - Les données du nouvel employé à ajouter.
   */
  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  return (
    <AppContext.Provider value={{ itemsPerPage, updateItemsPerPage, search, updateSearchText, employees, addEmployee }}>
      {children}
    </AppContext.Provider>
  );
};
