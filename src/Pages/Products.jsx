import React, { useState } from "react";
import data from "../../data.json";
import ProductList from "./ProductList";

const Products = () => {
  const [products, setProducts] = useState(data.products);
  console.log(products, "asdhsadghg");
  return (
    <div className="container mt-5 mb-3">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((p) => (
          <ProductList product={p} />
        ))}
      </div>
    </div>
  );
};

export default Products;
