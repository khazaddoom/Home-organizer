import React from "react"
import { FaMoon } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';



export const Header = () => {
    return (
        <header className="header" >
            <nav>
                <div className="logo">
                    <img src="./images/logo.png" alt="Home-organizer" />
                </div>
                <div className="settings">
                    <ul>
                        <li className="settings__add">
                            <FaPlus />
                        </li>
                        <li className="settings__darkmode">
                            <FaMoon />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};