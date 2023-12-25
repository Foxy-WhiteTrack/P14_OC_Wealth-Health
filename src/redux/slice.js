import { createSlice } from '@reduxjs/toolkit'
import employeeMock from '../datas/employeeMock'

const initialState = {
    employees: employeeMock,
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {

        initEmployees: (state, action) => {
            state.employees = action.payload
        },

        addEmployee: (state, action) => {
            state.employees.push(action.payload)
            localStorage.setItem('employees', JSON.stringify(state.employees))
        },

        loadFromStorage: (state) => {
            const savedEmployees = JSON.parse(localStorage.getItem('employees'))
            state.employees =
                savedEmployees && savedEmployees.length > 0
                    ? savedEmployees
                    : employeeMock
        },
    },
})

export const { initEmployees, addEmployee, loadFromStorage } =
    employeeSlice.actions

export default employeeSlice.reducer