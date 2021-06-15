import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home/Home'
import Error404 from './components/shared/error404/Error404';
import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';
import Componentes from './components/componentes/Componentes'
import createComponente from './components/createComponente/createComponente';
import editComponente from './components/editComponente/editComponente';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                {/*Configuración RUTAS Y PÁGINAS*/}
                <div className="container-fluid p-3">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/componentes" component={Componentes} />
                        <Route exact path="/crear-componente" component={createComponente} />
                        <Route exact path="/editar-componente/:id" component={editComponente} />
                        <Route component={Error404} />
                    </Switch>
                </div>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;