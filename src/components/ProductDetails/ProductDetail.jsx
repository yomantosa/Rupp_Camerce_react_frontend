import { Container } from '@mui/system';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from "react-router-dom";
import './ProductDetail.css'

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProducts] = useState([]);
  
    const fetchData = async () => {
      const res = await fetch(`http://localhost:2424/api/product/get/${id}`);
      const data = await res.json();
      setProducts(data);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    console.log(product);
 

  return (
    <div>
  
        <Container sx={{display: "flex"}}>

        <div className="con">
        <div className="imgBx">
            <img src={product.picDir} alt="Nike Jordan Proto-Lyte Image"/>
        </div>
        <div className="details">
            <div className="content">
                <h2> {product.productname}
                    <p>{product.category}</p>
                </h2>
                <p>
                    Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is
                    made for all-day, bouncy comfort.
                    Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides
                    breathable support.
                    Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning.
                    Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of surfaces.
                </p>
                <h3>$ {product.price}</h3>
                <button>Buy Now</button>
            </div>
        </div>
    </div>
        </Container >
        
    </div>
  )
}

export default ProductDetail;
