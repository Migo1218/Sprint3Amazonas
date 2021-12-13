import React from 'react'
import { Detallescamera, Frontaldiv, Infoprecio } from '../../styles/frontalstyles'
import imgTraserocamera from '../../images/trasero.png'
import infoCanon from '../../images/infocanon.png'
import infoPrecio from '../../images/precioscamera.png'
import CamaraNav from '../Camaraspequeñas'
import Navbarsuper from '../Navbarsuper'
import Relacionados from '../Relacionados'
import Inspirados from '../Inspirado'
import ReactImageMagnify from "react-image-magnify";

const Trasero = () => {
    return (
        <>
        <Navbarsuper />
      <CamaraNav/>
          <Frontaldiv>
          <ReactImageMagnify className="zoom"
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: imgTraserocamera,
              },
              largeImage: {
                src: imgTraserocamera,
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
        <Relacionados/>
<Inspirados/>
        </>
      
        
    )
}

export default Trasero