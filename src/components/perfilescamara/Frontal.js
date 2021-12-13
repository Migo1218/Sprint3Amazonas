import React, { useEffect } from "react";
import imgfrontalcamera from "../../images/Rectangle 36.png";
import {
  Detallescamera,
  Divfrontalgrande,
  Frontaldiv,
  Infoprecio,
} from "../../styles/frontalstyles";
import infoCanon from "../../images/infocanon.png";
import infoPrecio from "../../images/precioscamera.png";
import Navbarsuper from "../Navbarsuper";
import CamaraNav from "../Camaraspequeñas";
import Relacionados from "../Relacionados";
import Inspirados from "../Inspirado";
import { useDispatch } from "react-redux";
import { listarProductos } from "../../actions/listarrelacionadosAction";
import { listarProductosinspirados } from "../../actions/listarinspiradosAction";
import ReactImageMagnify from "react-image-magnify";
const Frontal = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listarProductos())
  }, [dispatch])

 

  
  
  return (
    <>
      <Divfrontalgrande>
        <Navbarsuper />
        <CamaraNav />

        <Frontaldiv>
        <ReactImageMagnify className="zoom"
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: imgfrontalcamera,
              },
              largeImage: {
                src: imgfrontalcamera,
                width: 1300,
                height: 1000,
              },
            }}
          />
        </Frontaldiv>
       
        <Detallescamera>
          <img src={infoCanon} />
        </Detallescamera>

        <Infoprecio>
          <img src={infoPrecio} />
        </Infoprecio>
        <Relacionados />
       
        <Inspirados/>
      </Divfrontalgrande>
    </>
  );
};

export default Frontal;
