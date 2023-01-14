import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid bg-warning fondoInicio">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-8 d-flex align-items-center">
                        <div>
                            <h2>Reputation Tour</h2>
                            <p>Sigue las redes sociales!</p>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex align-items-center text-end">
                        <a href="https://www.instagram.com/taylorswift/" className="btn btn-dark" target={"_blank"} rel="noreferrer">Instagram!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;