import React from "react";
import "./Home.css";

import Form from "../../components/Form/Form";

import logo from "../../assets/logo.jpg"

/**
 * Composant pour la page d'accueil de l'application.
 *
 * @component
 * @example
 * // Utilisation du composant Home
 * <Home />
 */
export default function Home() {
    return (
        <main className="container">
            <div className="body">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <Form />
                <div id="form-modal"></div>
            </div>
        </main>
    );
}
