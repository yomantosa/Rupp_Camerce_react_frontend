import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Ptest = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:2424/api/product/getAll");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {products.map((p) => {
        <article key={p._id}>
          <h5>{p.name}</h5>
          <Link to={`/product/${p._id}`}>more</Link>
        </article>;
      })}
    </div>
  );
};

export default Ptest;
