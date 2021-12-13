import { types } from "../types/types";

const initialState = {
  productosCarrito: [],
};

export const buyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.carrito:
      return {
        productosCarrito: [...state.productosCarrito, action.payload],
      };

    // case types.search:
    //   console.log(action.payload);
    //   return {
    //     productos: [...state.productosCarrito, action.payload],
    //   };
    // case types.borrar:
    //     const nuevosItems = state.productosCarrito.filter(item => item.id !== action.payload)
    //     return {
    //         ...state,
    //          productosCarrito: nuevosItems

    //         }

    default:
      return state;
  }
};
