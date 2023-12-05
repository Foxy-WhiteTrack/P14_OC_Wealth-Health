import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Error() {

    const navigate = useNavigate();

    return (
        <main>
            <div>404 Error</div>
            <div>Cette page n'existe pas !</div>
        </main>
    );
}

export default Error;