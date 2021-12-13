import React from "react";
import {  Camarastyle, Iconscamera } from "../styles/camarastyle";
import img1peque from '../images/img-1.png'
import img2peque from '../images/img-2.png'
import img3peque from '../images/img-3.png'
import { useNavigate } from "react-router-dom";

const CamaraNav = () => {

  const redirectFrontal = useNavigate()
  const redirectSuperior = useNavigate()
  const redirectTrasero = useNavigate()
  return (
    
    <Camarastyle>
      
          <Iconscamera onClick={() => redirectFrontal('/')}>
              <img src={img1peque}/>
          </Iconscamera>
          <Iconscamera onClick={() => redirectSuperior('/superior')}>
              <img src={img3peque}/>
          </Iconscamera>
          <Iconscamera onClick={() => redirectTrasero('/trasero')}>
              <img src={img2peque}/>
          </Iconscamera>
    
    </Camarastyle>
  );
};

export default CamaraNav;
