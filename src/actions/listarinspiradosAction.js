import { types } from "../types/types"
import { collection,getDocs,query,where} from "@firebase/firestore";
import { db } from "../firebase/firebase";

//LISTAR O LEER DATOS

export const listarProductosinspirados = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "inspirado"));
        
     
        const produc = [];
        querySnapshot.forEach((doc) => {
            produc.push({
                id: doc.id, ...doc.data()
                
            })
            console.log(produc)
        });
        dispatch(listar(produc));
    }
}

export const listar = (products) => {
    return {
        type: types.listarIns,
        payload: products
    }
}