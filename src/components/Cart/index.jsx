import { CartProducts } from "../CartProducts/index.jsx";
import { StyledAsyde } from "./styles.js";

export function CartAside({ cartProdcts, removeAllProductCart, index, removeProduct }) {
  return (
    <StyledAsyde>
      <aside>
        <div className="divTitleCart">
          <h2 className="titleCart">Carrinho de compras</h2>
        </div>

        {cartProdcts.length === 0 ? (
          <div className="areaDivDefault">
            <p className="phraseOfEmptiness">Sua sacola está vazia</p>
            <p className="addItems">Adicione itens</p>
          </div>
        ) : (
          <ul>
            {cartProdcts.map((elem) => (
              <CartProducts key={elem.id} element={elem} indexProdcs={index} removeProduct={removeProduct}/>
            ))}
          </ul>
        )}

        {cartProdcts.length !== 0 && (
          <div className="total">
            <div className="prices">
              <p className="textTotal">Total</p>
              <span className="textPrice">
                R${" "}
                {cartProdcts
                  .reduce((acc, act) => acc + act.price, 0)
                  .toFixed(2)}
              </span>
            </div>
            <button
              type="button"
              className="btRemoveAll"
              onClick={() => removeAllProductCart(index)}
            >
              Remover todos
            </button>
          </div>
        )}
      </aside>
    </StyledAsyde>
  );
}
