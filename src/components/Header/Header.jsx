import React from "react";
import "./Header.css";

import { Link, useLocation } from "react-router-dom";

/**
 * Composant de l'en-tête de l'application.
 * @component
 * @returns {JSX.Element} Le composant de l'en-tête.
 */
export default function Header() {
    const location = useLocation();

    // Vérifier si la page actuelle est la page des employés
    const isEmployeesPage = location.pathname.endsWith('/employees');

    return (
        <div className="header">
            {!isEmployeesPage ? (
                <div className="headerv1">
                    <div className="title">
                        <h1 className="schedule_time">HRnet</h1>
                    </div>
                    <div className="flex">
                        <div className="title-down">
                            <Link to="/employees">View Current Employees <span> →</span></Link>
                        </div>
                        <div className="name-page">
                            <h2>Create Employee</h2>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="headerv2">
                    <div className="name-page">
                        <h2>Current Employees</h2>
                    </div>
                </div>
            )}
        </div>
    );
}
