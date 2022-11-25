import React from "react";
import imgLogo from "../../img/Logo.svg";
import { StyledHeader, StyledHeaderDiv, StyledForm } from "./styles.js";


export function Header() {
  // const [search, setSearch] = useState ("")
 

  // const filteredProducts = !search ? products : products.filter(element => element.name.toLowerCase().includes(search.toLowerCase))
  // value={search} onChange={showProducts}
//   function showProducts(event){
//  setSearch(event.target.value)
//   }
  return (
    <StyledHeader>
      <header>
        <div>
          <StyledHeaderDiv>
            <img src={imgLogo} alt="Logo Burguer Kenzie" />
            <StyledForm>
              <form>
                <input type="text" placeholder="Digitar Pesquisa" className="inputSearch" />
                <button type="submit">Pesquisar</button>
              </form>
            </StyledForm>
          </StyledHeaderDiv>
        </div>
      </header>
    </StyledHeader>
  );
}
