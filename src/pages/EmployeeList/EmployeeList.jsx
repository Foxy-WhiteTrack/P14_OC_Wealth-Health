import React, { useEffect, useState } from "react";

import { employees } from "../../datas/employeeMock";

export default function EmployeeList() {

    const [storedEmployees, setStoredEmployees] = useState([])
    const [sortedColumn, setSortedColumn] = useState(null)
    const [sortDirection, setSortDirection] = useState("asc")
    const [fusionnedData, setFusionnedData] = useState([])

    useEffect(() => {
        const storedEmployeesData = JSON.parse(localStorage.getItem("employees"))
        setStoredEmployees(storedEmployeesData)

        // fusionner les données (mock + localStorage)
        setFusionnedData(storedEmployeesData)
    });

    return (
        <main>
            <div id="employee-div" class="container">
                <table id="employee-table" class="display"></table>
            </div>
        </main>
    );

    const renderTableHeaders = () => {
        const columns = [
            "firstname",
            "lastname",
            "starter",
            "department",
            "birthdate",
            "street",
            "city",
            "state",
            "zip",
        ]

        // return columns.map((column) => (
        //     <th
        //         key={column}
        //         className="px-4 py-2 cursor-pointer"
        //         onClick={() => handleSort(column)}
        //     >
        //         {column.charAt(0).toUpperCase() + column.slice(1)}{" "}
        //         {renderSortIcon(column)}
        //     </th>
        // ))

        // return (
        // boucler sur les employés => tr + td
        // affiche le nombre d'employé aussi
    }
}