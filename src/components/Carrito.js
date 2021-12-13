import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemCarrito } from "../actions/listarrelacionadosAction";
import Navbarsuper from "./Navbarsuper";

const Carrito = () => {
  const dispatch = useDispatch()
  const carrito = useSelector((state) => state.carrito.productosCarrito);
  console.log(carrito);

  const deleteItem = (id) => {
    console.log(id)
      dispatch(deleteItemCarrito(id))
  }
  return (
    <>
      <Navbarsuper />
      <div className="carritodiv">
        <h1>Carrito</h1>

        <hr />

        {carrito && carrito.map((carrito) => (
          <div className="productindividual">
            <div className="imgproductocarrito">
              <img src={carrito.url} />
            </div>
            <div className="parrafo">
              <h2 className="descripcion">{carrito.description}</h2>
              <h3>price: {carrito.price}</h3>
              <button
                type="button"
                className="btn btn-warning btnsignin"
                id="sign-in"
                onClick={()=>deleteItem(carrito.id)}
              >
                Eliminar producto
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="procederpago">
          <h3>Subtotal: </h3>
            <button className="btn btn-warning btnpagar">
                Proceder al pago
            </button>
      </div>
    </>
  );
};

export default Carrito;
