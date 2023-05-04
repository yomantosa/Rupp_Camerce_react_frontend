import React from "react";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    const res = await fetch("http://localhost:2424/api/product/getAll");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container sx={{ marginTop: "30px" }}>
      <div className="features_items ">
        <h2 className="title text-center">Features Items</h2>
        {products.map((p) =>  (
          <div className="col-sm-4" key={p.id}>
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <img src={p.picDir} alt="" />
                  <h2>${p.price}</h2>
                  <p>{p.name}</p>
                  <Link to={"/"} className="btn btn-default add-to-cart">
                    <i className="fa fa-shopping-cart"></i>Add to cart
                  </Link>
                  <Link to={`/productdetail1/${p._id}`} className="btn btn-default add-to-cart">
                    <i className="fa fa-shopping-cart"></i>details
                  </Link>
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                    <p>{p.productname}</p>
                    <p>{p.category}</p>
                    <h2>${p.price}</h2>
                    <Link to={"/"} className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                      <Link to={`/productdetail1/${p._id}`} className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart"></i>details
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Product;
