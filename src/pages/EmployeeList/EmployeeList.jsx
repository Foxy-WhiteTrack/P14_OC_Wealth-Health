import React, { useEffect, useState } from "react";

import employeeMock from '../../datas/employeeMock';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import FilterZone from '../../components/FilterZone/FilterZone';
import Pagination from '../../components/Pagination/Pagination';

import FilterOptions from '../../components/FilterOptions/FilterOptions';
import SearchFilter from '../../components/SearchFilter/SearchFilter';

import './EmployeeList.css';

import { useAppContext } from '../../hooks/appContext';

/**
 * Composant pour afficher la liste des employés avec des fonctionnalités de filtrage et de pagination.
 *
 * @component
 * @example
 * // Utilisation du composant EmployeeList
 * <EmployeeList />
 */
export default function EmployeeList() {
    const { itemsPerPage } = useAppContext();
    const [currentPage, setCurrentPage] = useState(1);

    const { search } = useAppContext();

    const { employees } = useAppContext();

    /**
     * Fonction pour gérer le changement de page.
     *
     * Cette fonction est appelée lorsque l'utilisateur change de page dans la pagination.
     *
     * @param {number} page - Le numéro de la page sélectionnée.
     */
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // sens du flux des données
    // allEmployees => filterData => totalItems => paginatedData

    const allEmployees = [...employees, ...employeeMock];

    const filterData = allEmployees.filter((employee) =>
        employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
        employee.department.toLowerCase().includes(search.toLowerCase()) ||
        employee.street.toLowerCase().includes(search.toLowerCase()) ||
        employee.city.toLowerCase().includes(search.toLowerCase()) ||
        employee.state.toLowerCase().includes(search.toLowerCase())
    );

    // total d'éléments
    const totalItems = filterData.length;

    // Calcul des éléments à afficher sur la page actuelle
    const startIndex = (currentPage - 1) * itemsPerPage;

    // const endIndex = startIndex + itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    const paginatedData = filterData.slice(startIndex, endIndex);

    return (
        <main>
            <div id="employee-div" className="container">
                <div className='filterZone'>
                    <div className="ctn-nbr-entries">
                        <FilterOptions
                            onPageChange={handlePageChange}
                        />
                    </div>
                    <div>
                        <SearchFilter />
                    </div>
                </div>
                <EmployeeTable data={paginatedData} />
                <div className="bottom-zone">
                    <div className="current-pos">
                        Showing {startIndex + 1} to {endIndex} of {totalItems} entries
                    </div>
                    <Pagination
                        totalItems={totalItems}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </main>
    );
}
