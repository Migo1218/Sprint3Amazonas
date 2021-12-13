import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Carrito from '../components/Carrito'
import Login from '../components/Login'
import Frontal from '../components/perfilescamara/Frontal'
import Superior from '../components/perfilescamara/Superior'
import Trasero from '../components/perfilescamara/Trasero'
import Register from '../components/Register'
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { login } from '../actions/loginAction'
import { useDispatch } from 'react-redux'
import PrivateRoute from './PrivateRoute'
import {  useNavigate } from "react-router-dom";
import PublicRoute from './PublicRoute'


const AppRouter = () => {
    const dispatch = useDispatch()
    
    const auth = getAuth()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(login(user.uid, user.displayName))
                
            } 
        })
    }, [auth, dispatch]) 
    return (
            <Router>
                <Routes>
                <Route exact path="/"  element={<Frontal/>}/>                
                <Route exact path="/superior"  element={<Superior/>}/>
                <Route exact path="/trasero"  element={<Trasero/>}/>
                <Route exact path="/login"  element={(
                    <PublicRoute>
                        <Login />
                    </PublicRoute>)}/>
                <Route exact path="/register"  element={<Register/>}/>
                <Route exact path="/carrito"  element={(
                    <PrivateRoute>
                        <Carrito />
                    </PrivateRoute>
                )}/>
                </Routes>  
            </Router>
    )
}

export default AppRouter