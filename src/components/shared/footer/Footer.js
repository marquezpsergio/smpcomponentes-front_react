import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    autor = { name: 'Sergio Márquez', anio: 2021 };

    render() {
        return (
            <footer className="footer bg-dark py-3 mt-3 text-center">
                <div className="container mb-3">
                    <div className="row justify-content-center text-center">
                        <div className="col-2 social-network social-circle">
                            <a className="icoTwitter" href="https://twitter.com/smpcomponentes" target="_blank" rel="noreferrer" title="Twitter">
                                <i className="fab fa-twitter icono"></i>
                            </a>
                        </div>
                        <div className="col-2 social-network social-circle">
                            <a className="icoInstagram" href="https://www.instagram.com/smpcomponentes" target="_blank" rel="noreferrer" title="Instagram">
                                <i className="fab fa-instagram icono"></i>
                            </a>
                        </div>
                        <div className="col-2 social-network social-circle">
                            <a className="icoFacebook" href="https://www.facebook.com/smpcomponentes" target="_blank" rel="noreferrer" title="Facebook">
                                <i className="fab fa-facebook icono"></i>
                            </a>
                        </div>
                        <div className="col-2 social-network social-circle">
                            <a className="icoLinkedin" href="https://www.linkedin.com/in/smpcomponentes" target="_blank" rel="noreferrer" title="Linkedin">
                                <i className="fab fa-linkedin icono"></i>
                            </a>
                        </div>
                        <div className="col-2 social-network social-circle">
                            <a className="icoEmail" href="mailto:contacto@smpcomponentes.com" title="Email">
                                <i className="fas fa-envelope icono"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <a className="text-white my-auto autor" href="https://linkedin.com/in/smarquezp05"
                    target="_blank" rel="noreferrer">©{this.autor.anio} {this.autor.name} </a>
            </footer>
        );
    }
}

export default Footer;