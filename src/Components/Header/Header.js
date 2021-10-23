// Modules
import React from "react";

// Components
import Navigation from "../Navigation";

// Styles
import s from "./Header.module.scss";

function Header(props) {
    return (
        <header>
            <div className="container">
                <Navigation />
            </div>
        </header>
    )
}

export default Header;
