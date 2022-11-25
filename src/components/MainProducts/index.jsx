import React from "react";
import { ProductsList } from "../ProductsList/index.jsx";
import { StyledMain } from "./style.js";
import { Product } from "../Products/index.jsx";
import { Cart } from "../Cart/index.jsx";
import { useState, useEffect } from "react";
import {api} from "../../lib/axiosClient.js"


export function MainProducts() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function GetProducts(){
      try{
      
      const response = await api.get("/products")
      setProducts(response.data)
      
      
      }catch(error){
          console.log(error)
      }
      }
     GetProducts()
  }, [])
  
  return (
    <StyledMain>
      <main>
        <div>
          <ProductsList>
            {
              products.map(element=> <Product element={element} key={element.id}/>)
            }
          </ProductsList>
          <Cart products={products} />
        </div>
      </main>
    </StyledMain>
  );
}
