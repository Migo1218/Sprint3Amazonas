import { types } from "../types/types"
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "@firebase/auth"

export const register = (email, password, name) => {
    return {
        type: types.register,
        payload: {
            email,
            password,
            name
        }
    }
}

export const registerEmailPassword = (name, email, password) =>{
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then(async({user})=>{
            await updateProfile(auth.currentUser, {displayName: name})

            dispatch(register(user.email, user.uid, user.displayName))
        })
    }
}