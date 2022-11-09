import React, { useState, useReducer } from 'react'
import { TYPES } from '../components/actions/ShoppingActions'



function Productos2() {

  //const [state, dispatch] = useReducer(shoppingreducer, shoppingcartInitialState)

const[productos, setproductos] = useState([
  {id: 1, name:"producto1", price: "100", img:"https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg"},
  {id: 2, name:"producto2", price: "500", img:"https://www.cocinacaserayfacil.net/wp-content/uploads/2020/04/Recetas-de-comidas-para-ni%C3%B1os.jpg"}
])

console.log(productos)


  return (
    <>
        <div>Productos</div>
        <div>
          {productos.map((p) => {
            return (<div>
              <img src={p.img}></img>
              <p>{p.name}</p>
             {/* <button onClick={() => addToCart(p.id)}>aniadir al carrito</button> */}
            </div>)
          } )}
        </div>
    </>

  )
}

export default Productos2