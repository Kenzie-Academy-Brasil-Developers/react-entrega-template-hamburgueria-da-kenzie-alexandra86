import React from "react";
import imgLogo from "../../img/Logo.svg";
import { StyledHeader, StyledHeaderDiv, StyledForm } from "./styles.js";


export function Header({searchProds, setSearchProds}) {

function PreventSearch(event, element){

  event.preventDefault()

  const formSearch = {
    img: element.img,
    name:element.name,
    category:element.category,
    price:element.price,
  }
  setSearchProds =[...searchProds, formSearch]
}

  return (
    <StyledHeader>
      <header>
        <div>
          <StyledHeaderDiv>
            <img src={imgLogo} alt="Logo Burguer Kenzie" />
            <StyledForm onSubmit={PreventSearch}>
                <input value={searchProds} 
                onChange={(event)=> setSearchProds(event.target.value)}
                type="text" placeholder="Digitar Pesquisa" className="inputSearch" />
                <button type="submit">Pesquisar</button>
            </StyledForm>
          </StyledHeaderDiv>
        </div>
      </header>
    </StyledHeader>
  );
}
