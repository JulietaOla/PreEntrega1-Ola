import React from "react";
import Banner from "./componets/Banner";
import Footer from "./componets/Footer";
import ItemListContainer from "./componets/ItemListContainer";
import Navbar from "./componets/Navbar";

const App = () => {
  return (
    <div>
    <Navbar/>
    <ItemListContainer greeting={"Bienvenidos a Taylor Shop!"}/>
    <Banner/>
    <Footer/>
    </div>
  )
}

export default App;