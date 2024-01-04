import React from "react";
import "./Footer.css";

import { Link, useLocation } from "react-router-dom";

/**
 * Composant du pied de page de l'application.
 * @component
 * @returns {JSX.Element} Le composant du pied de page.
 */
export default function Footer() {
    const location = useLocation();

    // Vérifier si la page actuelle est la page des employés
    const isEmployeesPage = location.pathname.endsWith('/employees');

    return (
        <div className="footer">
            {isEmployeesPage ? (
                <div className="footerv1">
                    <div className="title-footer">
                        <Link to="/">Home <span> →</span></Link>
                    </div>
                </div>
            ) : (
                <div className="footerv2">
                    {/* Contenu du pied de page pour d'autres pages */}
                </div>
            )}
        </div>
    );
}
