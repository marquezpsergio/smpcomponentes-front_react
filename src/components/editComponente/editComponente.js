import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import Global from '../../Global';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert2'

class editComponente extends Component {

    state = {
        categorias: [],
        fabricantes: [],
        componente: {},
        status: '0'
    }

    categorias = [];
    fabricantes = [];

    componenteId = null;

    categoriaRef = React.createRef();
    fabricanteRef = React.createRef();
    nombreRef = React.createRef();
    precioRef = React.createRef();
    unidadesRef = React.createRef();
    imagenRef = React.createRef();
    urlRef = React.createRef();

    catSelected = {};
    fabSelected = {};

    componentWillMount() {
        this.getCategorias();
        this.getFabricantes();
        this.componenteId = this.props.match.params.id;
        this.getComponente(this.componenteId);
        this.setState({
            status: '0'
        });
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es obligatorio'
            }
        });
    }

    getComponente = (componenteId) => {
        axios.get(Global.url + "componentes/" + componenteId)
            .then(res => {
                this.setState({
                    componente: res.data,
                    status: '0'
                });
                console.log(res.data);
            });

    }

    getCategorias = () => {
        axios.get(Global.url + "categorias")
            .then(res => {
                this.setState({
                    categorias: res.data,
                    status: '0'
                });
                this.categorias = res.data;
            });
    };

    getFabricantes = () => {
        axios.get(Global.url + "fabricantes")
            .then(res => {
                this.setState({
                    fabricantes: res.data,
                    status: '0'
                });
                this.fabricantes = res.data;
            });
    };

    saveArticle = (e) => {
        e.preventDefault();

        this.changeState();

        if (this.validator.allValid()) {
            axios.put(Global.url + "componentes/" + this.componenteId, this.state.componente)
                .then((res) => {
                    if (res.data.componente) {
                        this.setState({
                            componente: res.data.componente,
                            status: 'success'
                        })
                    } else {
                        this.setState({
                            status: 'failed'
                        })
                    }
                    swal.fire("Componente editado!", 'El componente ha sido editado con éxito', 'success')
                })
        } else {
            this.validator.showMessages();
            this.forceUpdate();
            this.setState({
                status: 'failed'
            })
            swal.fire("Ooops...!", 'Error al editar el componente, revisa los campos de nuevo', 'error')
        }
    }

    changeState = () => {
        this.setState({
            componente: {
                id: this.componenteId,
                categoria: this.categorias.find(x => x.id === Number(this.categoriaRef.current.value)),
                fabricante: this.fabricantes.find(x => x.id === Number(this.fabricanteRef.current.value)),
                nombre: this.nombreRef.current.value,
                precio: this.precioRef.current.value,
                unidadesDisponibles: this.unidadesRef.current.value,
                imagen: this.imagenRef.current.value,
                url: this.urlRef.current.value
            }
        });
    }

    render() {
        if (this.state.status === 'success') {
            return <Redirect to="/componentes" />
        }


        if (this.state.categorias.length > 0) {
            var listCategorias = this.state.categorias.map((cat) => {
                return (
                    <option value={cat.id} key={cat.id}>{cat.nombre}</option>
                )
            })
        }

        if (this.state.fabricantes.length > 0) {
            var listFabricantes = this.state.fabricantes.map((fab) => {
                return (
                    <option value={fab.id} key={fab.id}>{fab.nombre}</option>
                )
            })
        }

        var componente = this.state.componente;

        return (
            <div id="componentes-form">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="card bg-dark text-white">
                            <div className="card-header">Editar Componente</div>
                            <div className="card-body">
                                {this.state.componente.categoria && this.state.componente.fabricante &&
                                    <form onSubmit={this.saveArticle}>
                                        <div className="form-group row my-1">
                                            <label htmlFor="categoria" className="col-form-label col-md-3">Categoría <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <select name="categoria" id="categoria" className="form-control" ref={this.categoriaRef} defaultValue={componente.categoria.id} required onChange={this.changeState}>
                                                    <option disabled key='-1'>Seleccione una categoría</option>
                                                    {listCategorias}
                                                </select>
                                            </div>
                                            {this.validator.message('categoria', this.state.componente.categoria, 'required')}
                                        </div>

                                        <div className="form-group row my-1">
                                            <label htmlFor="fabricante" className="col-form-label col-md-3">Fabricante <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <select name="fabricante" id="fabricante" className="form-control" ref={this.fabricanteRef} defaultValue={componente.fabricante.id} required onChange={this.changeState}>
                                                    <option disabled key='-1'>Seleccione un fabricante</option>
                                                    {listFabricantes}
                                                </select>
                                            </div>
                                            {this.validator.message('fabricante', this.state.componente.fabricante, 'required')}

                                        </div>

                                        <div className="form-group row my-1">
                                            <label htmlFor="nombre" className="col-form-label col-md-3">Nombre <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" name="nombre" id="nombre" className="form-control" placeholder="Nombre del componente" defaultValue={componente.nombre} ref={this.nombreRef} required onChange={this.changeState} />
                                            </div>
                                            {this.validator.message('nombre', this.state.componente.nombre, 'required')}
                                        </div>

                                        <div className="form-group row my-1">
                                            <label htmlFor="precio" className="col-form-label col-md-3">Precio <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="number" name="precio" id="precio" className="form-control" step="any" placeholder="Precio del componente" defaultValue={componente.precio} ref={this.precioRef} required min='0' onChange={this.changeState} />
                                            </div>
                                            {this.validator.message('precio', this.state.componente.precio, 'required')}
                                        </div>

                                        <div className="form-group row my-1">
                                            <label htmlFor="unidadesDisponibles" className="col-form-label col-md-3">Unidades disponibles</label>
                                            <div className="col-md-9">
                                                <input type="number" name="unidadesDisponibles" id="unidadesDisponibles" className="form-control" placeholder="Número de unidades disponibles" defaultValue={componente.unidadesDisponibles} min='0' ref={this.unidadesRef} onChange={this.changeState} />
                                            </div>
                                        </div>

                                        <div className="form-group row my-1">
                                            <label htmlFor="imagen" className="col-form-label col-md-3" >Imagen</label>
                                            <div className="col-md-9">
                                                <input type="text" name="imagen" id="imagen" className="form-control" ref={this.imagenRef} placeholder="Enlace de la imagen" defaultValue={componente.imagen} onChange={this.changeState} />
                                            </div>
                                        </div>

                                        <div className="form-group row my-1">
                                            <label htmlFor="url" className="col-form-label col-md-3">Url</label>
                                            <div className="col-md-9">
                                                <input type="text" name="url" id="url" className="form-control" ref={this.urlRef} placeholder="Enlace hacía web del componente" defaultValue={componente.url} onChange={this.changeState} />
                                            </div>
                                        </div>

                                        <div className="form-group row my-1 pt-4 justify-content-center">
                                            <div className="col-md-6">
                                                <input type="submit" value="Editar" className="btn btn-success w-100" />
                                            </div>
                                        </div>
                                    </form>
                                }

                                {!this.state.componente.nombre &&
                                    <div className='justify-content-center alert alert-danger p-3 mt-3'>
                                        <span><i className="fas fa-spinner"></i></span>
                                        <h2>Cargando...</h2>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default editComponente;