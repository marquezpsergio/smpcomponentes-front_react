import React, { Component } from 'react';
import './Header.css';
import logo from '../../../assets/logo.png';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    autor = { name: 'Sergio Márquez', anio: new Date().getFullYear() };
    titulo = 'SMPComponentes';

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 px-4">
                <NavLink to="/home" className="navbar-brand"><img alt="Logo SMPComponentes" className="me-2" id="img_logo"
                    src={logo} />{this.titulo}</NavLink>
                <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link enlace" activeClassName="enlace_active">
                                <i className="fas fa-home"></i> Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/componentes" className="nav-link enlace" activeClassName="enlace_active">
                                <i className="fas fa-microchip"></i> Nuestros componentes</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;