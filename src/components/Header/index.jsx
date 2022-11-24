import React from "react";
import imgLogo from "../../img/Logo.svg";
import { StyledHeader, StyledHeaderDiv, StyledForm } from "./styles.js";

export function Header() {
  return (
    <StyledHeader>
      <header>
        <div>
          <StyledHeaderDiv>
            <img src={imgLogo} alt="Logo Burguer Kenzie" />
            <StyledForm>
              <form>
                <input type="text" placeholder="Digitar Pesquisa" />
                <button type="submit">Pesquisar</button>
              </form>
            </StyledForm>
          </StyledHeaderDiv>
        </div>
      </header>
    </StyledHeader>
  );
}
