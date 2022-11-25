import React from "react";

const Cartwidget = () => {
    return (
        <button type="button" className="btn btn-warning position-relative">
        <img src="images/basket3-fill.svg" alt="carrito" width="30" />
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    1
    <span className="visually-hidden">unread messages</span>
    </span>
</button>
    )
}

export default Cartwidget; 