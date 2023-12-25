import { createContext, useEffect } from "react";
import { dataMock } from './../datas/department';

export const DataContext = createContext('');

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

    const addEmployee = (employee) => {
        const newEmployees = [...employees, employee];
        setEmployees(newEmployees);
        localStorage.setItem('employees', JSON.stringify(newEmployees));
    }
    const updateEmployee = (addedEmployee, value) => {
        setDatas({ ...datas, [addedEmployee]: value });
    };
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