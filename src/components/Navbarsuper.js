import React from "react";
import {
  Colorp,
  Divbuscar,
  Divfinalnavbarsuper,
  Eligeinter,
  Eligetudireccion,
  Holaiden,
  Imgubicacion,
  Inputbuscador,
  Logoamazonas,
  Navbarsuperstyle,
  Strongcuentas,
  Todoslosdepartamentos,
} from "../styles/navbarsuperstyles";
import logoamazon from "../images/logo-amazon.png";
import Busqueda from "./Busqueda";
import { Button } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import imgcarrito from '../images/carrito.png'
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/firebase";
import { signOut } from "@firebase/auth";
import { logout } from "../actions/loginAction";

const Navbarsuper = () => {
  
  const redirectLogin = useNavigate();
  const redirectHome = useNavigate();
  
  const redirectCarrito = useNavigate()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userName = useSelector((state) => state.login.name);


  const handleLogout = () => {
    dispatch(logout());
    redirectHome("/")
  }

  return (
    <Navbarsuperstyle>
      <div  onClick={()=>redirectHome('/')}>
        <Logoamazonas src={logoamazon} alt="amazon" />
      </div>

      <Eligetudireccion>
        <Colorp> Elige tu dirección</Colorp>
      </Eligetudireccion>

      <Divbuscar>
        <Busqueda />
      </Divbuscar>

      <Divfinalnavbarsuper>
        <Holaiden>
          Hola, 
          <Strongcuentas> {isLoggedIn && userName}</Strongcuentas>
          {"\n"}
          {!isLoggedIn && (<Button variant="warning" onClick={() => redirectLogin("/login")}>
            Identíficate{" "}
          </Button>)}

          {isLoggedIn && (<Button variant="warning" onClick={() => handleLogout()}>
            Cerrar sesión{" "}
          </Button>)}
          
        </Holaiden>
      </Divfinalnavbarsuper>
      <div className="carrito" onClick={()=> redirectCarrito('/carrito')}>
            <img src={imgcarrito} />
          </div>
    </Navbarsuperstyle>
  );
};

export default Navbarsuper;
