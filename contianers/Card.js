import React from "react";
import { css } from "@emotion/css";
import MapShow from "./MapShow";

const Card = ({ data }) => {
  //console.log("dataCard", data);
  return (
    <div className={css`padding: 20px 20px;`}>
      <fieldset
        className={css`
          border: 1px solid white;
          padding: 20px 20px;
          width: 92%;
          display: flex;
          justify-content: space-around;
        `}
      >
        <legend>{data.name}</legend>
        <div>
          <p>Continent : {data.continent.name}</p>
          <p>Capital : {data.capital}</p>
          <p>Language : {data.languages[0].name}</p>
        </div>
        <div>
          <p>Currency : {data.currency}</p>
          <p> Native : {data.native}</p>
          <p>Phone : {data.phone}</p>
        </div>
      </fieldset>
      <div
        className={css`
          margin-top: 10px;
          height: 400px;
          width: 100%;
        `}
      >
        <MapShow capital={data.capital} />
      </div>
    </div>
  );
};

export default Card;
