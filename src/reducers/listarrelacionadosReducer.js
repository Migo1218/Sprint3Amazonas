import { types } from "../types/types";


const initialState = {
   
  relacionados: [],
  busqueda: ''
};

export const listarrelacionadosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.listar:
        console.log(action.payload)
      return {
        relacionados: [ action.payload],
      };
    case types.search:
    //   console.log(action.payload);
      return {
          
        relacionados: [action.payload],
      };

      case types.delete:
      console.log(action.payload);
      return {
          ...state,
        relacionados: [state.relacionados.filter(rel => rel.description !== action.payload)]
      };
    default:
      return state;
  }
};
