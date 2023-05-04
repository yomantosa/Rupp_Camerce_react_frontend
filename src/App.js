
import SignUp from "./page/Register";

import { Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import ProductPage from "./page/product/ProductPage";
import ProductDetail from "./components/ProductDetails/ProductDetail";
import Login from "./page/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product" element={<ProductPage/>}></Route>
      <Route path="/productdetail1" element={<ProductDetail/>}></Route>
      <Route path="/productdetail1/:id" element={<ProductDetail/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  );
}

export default App;
