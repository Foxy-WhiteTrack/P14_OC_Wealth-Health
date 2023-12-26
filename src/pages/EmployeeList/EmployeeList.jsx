import React, { useEffect, useState } from "react";

import employeeMock from '../../datas/employeeMock';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import FilterZone from '../../components/FilterZone/FilterZone';
import Pagination from '../../components/Pagination/Pagination';

import './EmployeeList.css';

import { useAppContext } from '../../hooks/appContext';

export default function EmployeeList() {
    const { itemsPerPage } = useAppContext();
    const [currentPage, setCurrentPage] = useState(1);

    // Fonction pour gérer le changement de page
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Calcul du nombre total d'éléments
    const totalItems = employeeMock.length;

    // Calcul des éléments à afficher sur la page actuelle
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = employeeMock.slice(startIndex, endIndex);

    return (
        <main>
            <div id="employee-div" className="container">
                <FilterZone />
                <EmployeeTable data={displayedData} />
                <div className="bottom-zone">
                    <div className="current-pos">
                        Showing {startIndex + 1} to {Math.min(endIndex, itemsPerPage)} of {itemsPerPage} entries
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
