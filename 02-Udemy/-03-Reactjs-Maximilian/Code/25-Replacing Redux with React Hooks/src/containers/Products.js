import React from "react";
// import { ProductsContext } from "../context/products-context";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

import { useStore } from "../hooks-store/store";

const Products = (props) => {
  // const productList = useContext(ProductsContext).products;
  const state = useStore()[0];
  const productList = state.products;

  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
