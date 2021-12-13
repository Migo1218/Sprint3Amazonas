import { types } from "../types/types"
import { collection,getDocs,query,where} from "@firebase/firestore";
import { db } from "../firebase/firebase";

//BUSQUEDA

export const searchAsyn = (producto) => {

    return async(dispatch) => {
       
        const productos = collection(db,"productos");
        console.log(productos)
        const q = query(productos,where("description","==",producto))
        const datos = await getDocs(q);
        console.log(datos)
        const productoM = [];
        datos.forEach((docu) => {
            console.log(docu)
            productoM.push(docu.data())
        }) 
        console.log(productoM)
        dispatch(searchSync(productoM))
    }
}


export const searchSync = (busqueda) => {
    return{
        type: types.search,
        payload: busqueda
    }
}