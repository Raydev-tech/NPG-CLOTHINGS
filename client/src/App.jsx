import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
// import NewArrivals from "./pages/NewArrivals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Product from "./shop/id/page";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {

  // Cart items
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen bg-[#100805] text-white">

      {/* Navbar */}
      <Navbar cartItems={cartItems} />

      {/* Pages */}
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Shop */}
        <Route
          path="/shop"
          element={
            <Shop
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* New Arrivals */}
        {/* <Route
          path="/new-arrivals"
          element={
            <NewArrivals
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        /> */}

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <Product
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

      </Routes>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;