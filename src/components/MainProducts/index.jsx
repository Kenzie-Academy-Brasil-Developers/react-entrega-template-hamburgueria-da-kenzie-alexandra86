import React, { useEffect } from "react";
import { api } from "../../services/axiosClient.js";
import { Header } from "../Header/index.jsx";
import { ProductsList } from "../ProductsList/index.jsx";
import { StyledMain } from "./style.js";
import { useState } from "react";
import { Product } from "../Products/index.jsx";
import { CartAside } from "../Cart";
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

export function MainProducts() {
  const [prods, setProds] = useState([]);
  const [searchProds, setSearchProds] = useState("");
  const [cartProdcts, setCartProducts] = useState([]);

  function addProductsCart(element) {
    
    const getAddProducts = prods.find((elem) => elem.id === element.id);
    setCartProducts((previuosCart) => {
      
      return [...previuosCart, getAddProducts];
    });
    toast.success("Produto adicionado com sucesso!")
  }

  const showProducts = !searchProds
    ? prods
    : prods.filter((element) =>
        element.name.toLowerCase().includes(searchProds.toLocaleLowerCase()) || 
        element.category.toLowerCase().includes(searchProds.toLocaleLowerCase())
      );

  function removeAllProductCart(id) {
    const removeAllProdcts = cartProdcts.filter(
      (elem) => cartProdcts.indexOf(elem) === id
    );
    setCartProducts(removeAllProdcts);
    toast.info("Produtos removidos!")
    setTimeout(()=>{
      toast.warn("Sacola vazia! Adicione itens!")
    }, 2000)
    
  }

  function removeProduct(id) {
    const removeAddProdcts = cartProdcts.filter(
      (elem) => elem !== id
    );
    setCartProducts(removeAddProdcts);
    toast.info("Produto removido com sucesso!")
  }


  useEffect(() => {
    async function getProduct() {
      try {
        const response = await api.get("/products");
        setProds(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProduct();
  }, []);

  return (
    <>
      <Header setSearchProds={setSearchProds} />
      <StyledMain>
        <main>
          <div className="divMain">
            <ProductsList>
              {showProducts.map((elem) => (
                <Product
                  key={elem.id}
                  element={elem}
                  addProductsCart={addProductsCart}
                  removeProduct ={()=> removeProduct(elem.id)}
                />
              ))}
            </ProductsList>
            <CartAside
              cartProdcts={cartProdcts}
              removeAllProductCart={removeAllProductCart}
              removeProduct={removeProduct}
             
            />
          </div>
        </main>
      </StyledMain>
      <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    </>
  );
}
