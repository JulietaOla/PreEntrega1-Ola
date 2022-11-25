import React from "react";
import Cartwidget from "./Cartwidget";

const Navbar = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6">
            <div className="container">
        <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="./images/taylor swift logo.png" alt="taylor swift logo" width="150"></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
            </li>
        </ul>
        </div>
    </div>
</nav>
</div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end">
                <Cartwidget/>
            </div>
        </div>
    </div>
)
}
export default Navbar; 