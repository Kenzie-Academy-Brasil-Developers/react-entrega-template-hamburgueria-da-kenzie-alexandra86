import React, { useEffect } from "react";
import { api } from "../../services/axiosClient.js";
import { ProductsList } from "../ProductsList/index.jsx";
import { StyledMain } from "./style.js";
import { useState } from "react";
import { Product } from "../Products/index.jsx";
import{CartAside} from "../Cart"






export function MainProducts() {
  
  const [prods, setProds] = useState([])

  useEffect(()=>{

    async function getProduct(){
      try{
  const response = await api.get("/products")
  setProds(response.data)
      }catch(err){
        console.log(err)
      }
      
    }
getProduct()
  },[])

  return (
    <StyledMain>
      <main>
        <div>
          <ProductsList>
            {
              prods.map(elem => <Product key={elem.id} element={elem}/>)
            }
          </ProductsList>
         <CartAside prods={prods}/>
        </div>
      </main>
    </StyledMain>
  );
}
