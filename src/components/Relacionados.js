import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buy } from "../actions/buyAction";
import { db } from "../firebase/firebase";
import {
  Cadaproduct,
  Description,
  Divdescription,
  Inter,
  Pricep,
  Productosrelacionados,
} from "../styles/relacionadosstyle";

const Relacionados = () => {

   const [datos] = useSelector(state => state.listar.relacionados)
  //  console.log(datos)


  const dispatch = useDispatch()
  // const [datos, setDatos] = useState([]);

  // console.log(datos);

  // useEffect(() => {
  //   obtenerDatos();
  // }, []);

  // const obtenerDatos = async () => {
  //   const querySnapshot = await getDocs(collection(db, "productos"));
  //   const response = [];
  //   querySnapshot.forEach((doc) => {
        
  //     response.push({ id: doc.id, ...doc.data() });
      
  //     //   console.log(`${doc.id} => ${doc.data()}`);
  //     //console.log(doc.data());
  //   });
  //   setDatos(response);
  // };

  const agregarCarrito = (id) =>{
    console.log(id)
    
      const filtro = datos.find(producto=> producto.id === id)
      dispatch(buy(filtro))

      console.log(filtro)
  }

  return (
    <Productosrelacionados>
        <h2><strong>Productos relacionados con este articulo</strong></h2>
      <Inter>
        
          {datos && datos.map((dat) => (
              <Cadaproduct key={dat.id}>
            <div >
              <img src={dat.url} />
              <Divdescription><Description>{dat.description}</Description></Divdescription>
              
              <Pricep>{dat.price}</Pricep>
            </div>
            <button
                    type="submit"
                    className="btn btn-warning btnagregarCarrito"
                    id="sign-in"
                    onClick={() => agregarCarrito(dat.id)}
                  >
                    Agregar al carrito
                  </button >
            </Cadaproduct>
          ))}
        
      </Inter>
    </Productosrelacionados>
  );
};

export default Relacionados;
