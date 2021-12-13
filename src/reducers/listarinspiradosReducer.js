import { types } from "../types/types";


const initialState= {
    inspirados:[]
}

export const listarinspiradosReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.listarIns:
            
           return{
            inspirados: [action.payload]
           }
    
        default:
        return state
    }
}

