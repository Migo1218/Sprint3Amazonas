import { types } from "../types/types"
import { collection,getDocs,query,where, doc,deleteDoc} from "@firebase/firestore";
import { db } from "../firebase/firebase";

//LISTAR O LEER DATOS

export const listarProductos = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "productos"));
        
     
        const produc = [];
        querySnapshot.forEach((doc) => {
            produc.push({
                id: doc.id, ...doc.data()
                
            })
        });
        dispatch(listar(produc));
    }
}

export const listar = (products) => {
    return {
        type: types.listar,
        payload: products
    }
}

//DELETE



export const deleteItemCarrito = (id) => {
    console.log(id)
    return{
        type: types.delete,
        payload: id
    }
}