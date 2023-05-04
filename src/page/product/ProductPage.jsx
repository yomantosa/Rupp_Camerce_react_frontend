import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/Navbar";
import Product from "../../components/Product/Product";
import Slideshow from "../../components/Slideshow/Slideshow";

import { useParams } from 'react-router-dom'

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <Product />
      <Footer />
    </>
  )
}

export default ProductPage;