import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./componets/Footer";
import ItemDetailContainer from "./componets/ItemDetailContainer";
import ItemListContainer from "./componets/ItemListContainer";
import NavBar from "./componets/Navbar";
import CartContextProvider from "./componets/context/CartContext";
import Cart from "./componets/Cart";
import Checkout from "./componets/Checkout";
import ThankYou from "./componets/ThankYou";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/thankyou/:id"} element={<ThankYou />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;