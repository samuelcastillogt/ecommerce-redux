import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Footer from '../component/Footer';
import Nav from '../container/Nav';
import Index from '../pages';
import Carrito from '../pages/Carrito';

const App = () => {
    return (
        <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
};

export default App;