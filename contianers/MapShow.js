"use client";

import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper,Marker } from "google-maps-react";


const API_KEY = "AIzaSyB594lJbll1jKx_ZXrtGDjMgkUtSFd3T-Q";
const mapStyles = {
  width: "75%",
  height: "50%",
};

const MapShow = ({ capital }) => {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
    //console.log('lat&lng',lat,lng)

  const LatandLng = async () => {
    try {
      const api_call = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${capital}&key=${API_KEY}`
      );
      const res = await api_call.json();
      //console.log("res", res.results[0].geometry.location);
      setLat(res.results[0].geometry.location.lat);
      setLng(res.results[0].geometry.location.lng);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    LatandLng();
  },[capital])


  return (
    <Map
      google={window.google}
      zoom={1}
      style={mapStyles}
      initialCenter={{
        lat: lat, 
        lng: lng,
      }}
    >
        <Marker
              position={
                  {
                      lat: lat, 
                      lng: lng
                  }
              }
            />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyB594lJbll1jKx_ZXrtGDjMgkUtSFd3T-Q",
})(MapShow);
