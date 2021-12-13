import React from "react";
import Navbarsuper from "./Navbarsuper";
import "../styles/loginstyles.css";
import logoamazon from "../images/logo-amazon.png";
import {useFormik} from 'formik'
import { registerEmailPassword } from "../actions/registerAction";
import { useDispatch } from "react-redux";

const Register = () => {

  const dispatch = useDispatch()

const formik = useFormik({
  initialValues:{
    name:'',
    email:'',
    password1:'',
    password2:''
  },

  

  onSubmit: (data) =>{
    console.log(data)
    const {password1, password2} = data
    if(password1===password2){
      dispatch(registerEmailPassword(data.name,data.email,data.password1))
    }else{
      console.log("contraseñas incorrectas")
    }
      
  formik.resetForm()
  }


})



 

  return (
    <>
      <Navbarsuper />
      <div className="d-flex flex-row justify-content-center" >
        <div className="row">
          <div className="col-md">
            <img className="img_1" src={logoamazon} alt="Amazon Logo" />
          </div>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-center">
        <div className="row">
          <div className="col-md">
            <form className="formlogin" onSubmit={formik.handleSubmit}>
              <div className="sign-in1">Registro</div>
              <hr />

              <div className="form-group">
                <label id="words_1" for="exampleInputName">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  name="name"
                  id="exampleInputName"
                  aria-describedby="name"
                  placeholder="Ingresa tu nombre"
                  required
                />
                <small id="emailHelp" className="form-text text-muted"></small>
              </div>

              <div className="form-group">
                <label id="words_1" for="exampleInputEmail1">
                  Correo electrónico(telefono para cuentas móviles)
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={formik.handleChange}
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Ingresa correo electrónico"
                  required

                />
                <small id="emailHelp" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label id="words_1" for="exampleInputPassword1">
                  Contraseña{" "}
                </label>
                <input
                  type="password"
                  name="password1"
                  onChange={formik.handleChange}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Contraseña"
                  required

                />

                <label id="words_2" for="exampleInputPassword2">
                  Repite tu contraseña{" "}
                </label>
                <input
                  type="password"
                  name="password2"
                  onChange={formik.handleChange}
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder="Repite tu contraseña"
                  required

                />
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-warning btnsignin"
                    id="sign-in"
                  >
                   
                   Crear cuenta
                  </button>

                  <br />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-center footer_1">
        <div className="row">
          <div className="col">
            <p className="conditions">
              <a>Conditions of Use </a> <a>Privacy </a> <a>Help </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
