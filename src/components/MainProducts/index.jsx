import React, { useEffect } from "react";
import { api } from "../../services/axiosClient.js";
import { Header } from "../Header/index.jsx";
import { ProductsList } from "../ProductsList/index.jsx";
import { StyledMain } from "./style.js";
import { useState } from "react";
import { Product } from "../Products/index.jsx";
import{CartAside} from "../Cart"






export function MainProducts() {
  
  const [prods, setProds] = useState([])
  const [searchProds, setSearchProds] = useState("")
const [cartProdcts, setCartProducts] = useState([]) 

function addProductsCart(element){
  const getAddProducts = prods.find(elem=> elem.id === element.id)
  setCartProducts((previuosCart)=>{return [...previuosCart, getAddProducts]})
}

const showProducts = !searchProds
? prods : prods.filter((element)=>element.name.toLowerCase().includes(searchProds.toLocaleLowerCase()))

// function removeAddProductCart(element){
//   const removeAddProducts = prods.find(elem=> elem.id === element.id)

// }


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
    <>
    <Header setSearchProds={setSearchProds}/>
    <StyledMain>
      <main>
        <div className="divMain">
          <ProductsList>
            {
              showProducts.map(elem => <Product key={elem.id} element={elem} addProductsCart={addProductsCart}/>)
            }
          </ProductsList>
         <CartAside cartProdcts={cartProdcts}/>
        </div>
      </main>
    </StyledMain>
    </>
  );
}
