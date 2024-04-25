import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import Lottie from 'lottie-react';
import animatedLoading from './loading-animation.json';
import Card from "./Card";

const DetailCard = ({data}) => {

  const [loading, setLoading] = useState (true)
  useEffect(()=>{
    if(loading){
      setTimeout(()=>{
        setLoading(false)
      },2000)
    }
  },[loading])

  return (
    <div
      className={css`
        width: 80vw;
        height: 80vh;
      `}
    >
      {loading ? <Lottie animationData={animatedLoading} loop={true} 
        autoplay={true} height={400} width={400} /> 
      : <Card data={data}/> }
      
    </div>
  );
};

export default DetailCard;
