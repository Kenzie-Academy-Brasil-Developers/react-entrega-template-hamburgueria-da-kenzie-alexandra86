// import { CartProducts } from "../CartProducts/index.jsx";
import { StyledAsyde } from "./styles.js";

export function CartAside({prods}) {
  return (
    <StyledAsyde>
      <aside>
        <div className="divTitleCart">
          <h2 className="titleCart">Carrinho de compras</h2>
        </div>
        {prods.length !== 0 &&(
 <div className="areaDivDefault">
 <p className="phraseOfEmptiness">Sua sacola está vazia</p>
 <p className="addItems">Adicione itens</p>
</div>
        )}
        {/* <CartProducts element={element}/> */}
       {prods.length === 0 &&(
        <div className="total">
          <div className="prices">
            <p className="textTotal">Total</p>
            <span className="textPrice"></span>
          </div>
          <button type="button" className="btRemoveAll">Remover todos</button>
        </div>
       )}
      </aside>
    </StyledAsyde>
  );
}
