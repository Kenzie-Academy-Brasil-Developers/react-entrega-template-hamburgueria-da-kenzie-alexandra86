import { StyledCartProducts } from "./styles.js";

export function CartProducts({ element, indexProdcs, index }) {
  return (
    <StyledCartProducts>
      <li key={element.id} className="liCartProducts" indexProdcs={index}>
        <img src={element.img} alt={element.name} className="imgCartProducts" />
        <div className="divAreaInform">
          <p className="titleCartProducts">{element.name}</p>
          <span className="titleCategoryCartProducts">{element.category}</span>
        </div>
        <button type="button" className="btRemoveCart">
          Remover
        </button>
      </li>
    </StyledCartProducts>
  );
}
