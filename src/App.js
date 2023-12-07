import React from 'react';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import EmployeeList from './pages/EmployeeList/EmployeeList';
import Error from './pages/Error/Error';
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}
