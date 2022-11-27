import { StyleProduct } from "./styles.js";

export function Product({ element, addProductsCart, removeProduct }) {
  return (
    <StyleProduct>
      <li key={element.id} removeProduct={removeProduct}>
        <img src={element.img} alt={element.name} />
        <div>
          <h2>{element.name}</h2>
          <span>{element.category}</span>
          <p>
            {element.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button
            type="button"
            onClick={() => {
              addProductsCart(element);
            }}
          >
            Adicionar
          </button>
        </div>
      </li>
    </StyleProduct>
  );
}
