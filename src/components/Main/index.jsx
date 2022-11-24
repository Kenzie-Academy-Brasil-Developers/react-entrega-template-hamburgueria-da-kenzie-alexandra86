import React from "react";
import { ProductsList } from "../ProductsList/index.jsx";
import { StyledMain } from "./styles.js";
import { Product } from "../Cards/index.jsx";

export function Main() {
  return (
    <StyledMain>
      <main>
        <div>
          <ProductsList>
            <Product />
          </ProductsList>
        </div>
      </main>
    </StyledMain>
  );
}
