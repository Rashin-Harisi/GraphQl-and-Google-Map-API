"use client";

import React, { useCallback, useEffect, useState } from "react";
//import { Map, GoogleApiWrapper,Marker } from "google-maps-react";
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';

const API_KEY = "AIzaSyB594lJbll1jKx_ZXrtGDjMgkUtSFd3T-Q";
const mapStyles = {
  width: "98%",
  height: "100%",
};

const MapShow = ({ capital }) => {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [map, setMap]= useState(null)
    //console.log('lat&lng',lat,lng)
  const center= {lat: Number(lat),lng: Number(lng)}

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: API_KEY
    })
    
    const onLoad = useCallback((map)=>{
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map)
    },[])
    const onUnmount = useCallback((map)=>{setMap(null)},[])

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
    isLoaded ? <GoogleMap
      mapContainerStyle={mapStyles}
      center={center}
      zoom={3}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
              position={
                  {
                      lat: lat, 
                      lng: lng
                  }
              }
            />
    </GoogleMap>  : <></> 
    
        
    
  );
};

export default MapShow;
