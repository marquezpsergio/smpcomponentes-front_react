import React from 'react';

const Error404 = () => {
    return (
        <div className="page-wrap d-flex flex-row align-items-center mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <span className="display-1 d-block">Ooops...!</span>
                        <div className="mb-4 lead">La página que buscas no está disponible.</div>
                        <a href="/home" className="btn btn-danger"><i className="fas fa-home"></i> Home</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error404;