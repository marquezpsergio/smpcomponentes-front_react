import React, { Component } from 'react'
import './Home.css';
import logo from '../../assets/logo.png'
import slider1 from '../../assets/slider/slider1.jpg';
import slider2 from '../../assets/slider/slider2.jpg';
import slider3 from '../../assets/slider/slider3.jpg';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h3 className="my-4 ms-4" id="bienvenido_h3"><img alt="Logo SMPComponentes" id="img_logo" src={logo} /> Bienvenido a SMPComponentes</h3>
                <div className="row my-4 px-3 justify-content-center">
                    <div className="col col-lg-7 mt-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Nuestros componentes</h5>
                                <p className="card-text">Accede al listado de todos nuestros componentes haciendo click aquí: </p>
                                <p className="card-text text-center">
                                    <NavLink to="/componentes" className="btn btn-danger ms-3">
                                        <i className="fas fa-microchip"></i> Ver nuestros componentes
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-lg-10 col-xl-8 col-xxl-7">
                        <div id="carousel" className="carousel slide" data-bs-ride="carousel" data-interval="2500">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active"
                                    aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <img src={slider1} className="w-100 img_slider rounded" alt="Configura tu nuevo ordenador" />
                                    <div className="carousel-caption d-block rounded p-3">
                                        <h5>¡Configura tu nuevo ordenador!</h5>
                                        <p>Realizar una configuración de tu nuevo ordenador está a un click. En nuestra página, usted podrá utilizar
                                            nuestro configurador para crear su próximo ordenador... ¡Incluso el de sus sueños!</p>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="d-block text-center">
                                        <img src={slider2} className=" w-100 img_slider rounded" alt="Nuestros componentes" />
                                    </div>
                                    <div className="carousel-caption d-block rounded p-3">
                                        <h5>¡Échale un vistazo a nuestros componentes!</h5>
                                        <p>Tenemos un gran número de componentes a su disposición para que pueda consultarlos y filtrar por
                                            diferentes
                                            opciones, adaptándonos a lo que usted esté buscando en el momento.</p>
                                    </div>
                                </div>

                                <div className="carousel-item active">
                                    <img src={slider3} className="w-100 img_slider rounded" alt="Ventajas" />
                                    <div className="carousel-caption d-block rounded p-3">
                                        <h5>¡Regístrate y disfruta de las ventajas!</h5>
                                        <p>Podrás configurar tu ordenador y consultar todas aquellas que has realizado anteriormente. Además, tu
                                            configuración podrá aparecer entre las más destacadas! Registrate haciendo click en el botón.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Siguiente</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;