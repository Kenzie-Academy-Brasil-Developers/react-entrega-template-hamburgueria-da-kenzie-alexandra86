export function CartProducts({element}){
return(

<ul>
<li key={element.id}>
        <img src={element.img} alt= {element.name} />
        <div>
          <h2>{element.name}</h2>
          <span>{element.category}</span>
          <p>{element.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
          <button type="button">Remover</button>
        </div>
      </li>
</ul>


)
}