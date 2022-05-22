import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import NavBarCus from './NavBarCus';

export default function AboutUs() {

  window.onload = Map();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  if(!isLoaded) {
    return (
      <div>Loading... <br /> Please wait...</div>
    )
  }

  return (
    <Map />
  )
}

function Map() {
  const center = useMemo(() => ({lat: 7.873054, lng: 80.771797}), []); 

  return( 
    <div>
      <NavBarCus/> 
      <br />
      <h3 style={{margin: "auto", textAlign: "center"}}> Hotel Locations </h3>
      <div className='container' style={{margin: "auto"}}>

      <GoogleMap 
        zoom={8} 
        center={center} 
        mapContainerStyle={{width: "100%", height: "600px", margin: "auto"}}
        >
            <Marker label={`Hotel Diamond`} key={Math.random()} position={{lat: 7.556572185273552, lng: 79.80297472980337}} visible={true} />
            <Marker label={`Hotel Ferry`} key={Math.random()} position={{lat: 7.457784074880624, lng: 80.64702858254344}} visible={true} />
            <Marker label={`Hotel New Diamond`} key={Math.random()} position={{lat: 7.267108542960322, lng: 80.64428200051219}} />
            <Marker label={`Hotel Grande`} key={Math.random()} position={{lat: 7.994916721232615, lng: 79.86776832138412}} />
            <Marker label={`Hotel Queens`} key={Math.random()} position={{lat: 7.303453260276691, lng: 80.6745950682215}} />
      </GoogleMap>
      
      </div>
      <br /><br />
      </div>
  )
}