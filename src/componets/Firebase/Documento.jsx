import React from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

const Documento = () => {
    const [producto, setProducto] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "items", "9hJ8zHh3WTeB20A6QeRW");
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                console.log(snapShot.data());
            } else {
                console.log("El Producto No Existe!");
            }
        });
    }, []);
    
    return (
        <h1>Documento</h1>
    )
}

export default Documento;