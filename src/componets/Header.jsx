import React from "react";
import Cartwidget from "./Cartwidget";
import Navbar from "./Navbar";

const Header = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Navbar/>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <Cartwidget/>
                </div>
            </div>
        </div>
    )
}

export default Header; 