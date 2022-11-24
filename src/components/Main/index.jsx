import React from "react";
import { ProductsList } from "../ProductsList/index.jsx";
import { StyledMain } from "./styles.js";
import { Product } from "../Products/index.jsx";
import { Cart } from "../Cart/index.jsx";

export function Main() {
  return (
    <StyledMain>
      <main>
        <div>
          <ProductsList>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </ProductsList>
          <Cart />
        </div>
      </main>
    </StyledMain>
  );
}
