import { types } from "../types/types"



export const buy = (producto) => {
    return {
        type: types.carrito,
        payload: producto
        
    }
}