import React from "react";

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center">
                    <p><img src="images/03.png" alt="ropa" className="img-fluid" /></p>
                    <h4>Encuentra con toda la experiencia de Reputation tour!</h4>
                    <p><a href="https://www.youtube.com/watch?v=HIb_TlK2HAI" target="_black" className="btn btn-warning">Ver mas!</a></p>

                </div>
                <div className="col-md-6 text-center">
                    <p><img src="images/01.jpg" alt="ropa" className="img-fluid" /></p>
                    <h4>Encuentra con toda la experiencia de Reputation tour!</h4>
                    <p><a href="https://www.youtube.com/watch?v=HIb_TlK2HAI" target="_black" className="btn btn-warning">Ver mas!</a></p>
                </div>
            </div>
        </div>
        
    )
}

export default Banner; 