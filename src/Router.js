import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import Componentes from './components/componentes/Componentes'
import Error404 from './components/shared/error404/Error404';
import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';

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
                        <Route component={Error404} />
                    </Switch>
                </div>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;