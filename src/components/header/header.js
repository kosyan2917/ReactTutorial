import React from "react";
import './header.css'
const Header = () => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Энциклопедия фигни</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
                    aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Люди</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Планеты</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Корабли</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Header;