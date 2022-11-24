import burgueImg from "../../img/burguer.svg";
import { StyleProduct } from "./styles.js";

export function Product() {
  return (
    <StyleProduct>
      <li>
        <img src={burgueImg} alt="imagem de hamburguer" />
        <div>
          <h2>Hamburguer</h2>
          <span>Sanduíches</span>
          <p>R$ 14,00</p>
          <button>Adicionar</button>
        </div>
      </li>
    </StyleProduct>
  );
}
