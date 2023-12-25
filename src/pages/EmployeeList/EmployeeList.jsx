import React, { useEffect, useState } from "react";

import employeeMock from '../../datas/employeeMock';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import FilterZone from '../../components/FilterZone/FilterZone';

export default function EmployeeList() {

    return (
        <main>
            <div id="employee-div" className="container">
                <FilterZone />
                <EmployeeTable data={employeeMock} />
            </div>
        </main>
    );

}