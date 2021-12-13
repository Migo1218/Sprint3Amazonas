import { types } from "../types/types"

export const loginReducer = (state={ isLoggedIn: false }, action) =>{
    switch (action.type) {
        case types.login:
            
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.displayname,
                isLoggedIn: true
            }

            case types.logout:
                return {}

            default:
                return state
    }
}