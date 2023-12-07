import React from "react";
import { Link } from "react-router-dom";


export default function Error() {

    return (
        <div className="error">
            <Link to="/" className="error-link">
                Retour
            </Link>
        </div>
    );
}