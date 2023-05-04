import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail1 = () => {
    //:id/:productname/:price/:detail/:picDir
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:2424/api/product/get/${id}`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);

  return (
    <>
        <h1>{products._id}</h1>
        <h1>{products.productname}</h1>
        
    </>
  );
};

export default ProductDetail1;
