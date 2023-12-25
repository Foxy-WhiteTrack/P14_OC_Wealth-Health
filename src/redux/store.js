import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './slice'

const savedEmployees = localStorage.getItem('employees')

const initialEmployees = savedEmployees ? JSON.parse(savedEmployees) : []

const firstState = {
    employee: {
        employees: initialEmployees,
    },
}

const store = configureStore({
    reducer: {
        employee: employeeReducer,
    },
    firstState,
})

export default store