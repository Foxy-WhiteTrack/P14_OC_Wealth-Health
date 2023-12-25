import React from "react";
import "./Footer.css";

import { Link, useLocation } from "react-router-dom";

export default function Footer() {

    const location = useLocation();

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

                </div>
            )}
        </div>
    );

}