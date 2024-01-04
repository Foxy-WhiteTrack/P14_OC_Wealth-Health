import React, { createContext, useContext, useState } from 'react';
import employeeMock from '../datas/employeeMock';

const EmployeesContext = createContext();

export const useEmployeesContext = () => {
    return useContext(EmployeesContext);
};

export const EmployeesProvider = ({ children }) => {
    const [employees, setEmployees] = useState([...employeeMock]);

    const addEmployee = (newEmployee) => {
        setEmployees([...employees, newEmployee]);
    };

    return (
        <EmployeesContext.Provider value={{ employees, addEmployee }}>
            {children}
        </EmployeesContext.Provider>
    );
};
