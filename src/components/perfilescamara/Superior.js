import React from "react";
import {
  Detallescamera,
  Divfrontalgrande,
  Frontaldiv,
  Infoprecio,
} from "../../styles/frontalstyles";
import imgSuperiorcamera from "../../images/superior.png";
import infoCanon from "../../images/infocanon.png";
import infoPrecio from "../../images/precioscamera.png";
import Navbarsuper from "../Navbarsuper";
import CamaraNav from "../Camaraspequeñas";
import Relacionados from "../Relacionados";
import { Inspiradosdiv } from "../../styles/relacionadosstyle";
import Inspirados from "../Inspirado";
import ReactImageMagnify from "react-image-magnify";

const Superior = () => {
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
                src: imgSuperiorcamera,
              },
              largeImage: {
                src: imgSuperiorcamera,
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
        <Inspirados />
      </Divfrontalgrande>
    </>
  );
};

export default Superior;
