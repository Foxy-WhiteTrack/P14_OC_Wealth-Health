import React from "react";
import "./Home.css";

import Form from "../../components/Form/Form";

import logo from "../../assets/logo.jpg"

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