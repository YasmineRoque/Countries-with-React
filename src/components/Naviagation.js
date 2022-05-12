import React from "react";
import { NavLink } from "react-router-dom";

const Naviagation = () => {
    return (
        <div className="navigation">
            <ul>

                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>à propose</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Naviagation;

