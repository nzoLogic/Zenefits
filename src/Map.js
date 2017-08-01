/* 
  Map component imported from react-google-maps
  https://github.com/tomchentw/react-google-maps
  
  Contains the SearchBox, PlaceDisplay and Marker components 
*/



import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import PlaceDisplay from './PlaceDisplay.js'
const SearchBox = require('react-google-maps/lib/places/SearchBox').default

const INPUT_STYLE = {
  boxSizing: `border-box`,
  MozBoxSizing: `border-box`,
  border: `1px solid transparent`,
  backgroundColor: `#fff`,
  width: `286px`,
  height: `38px`,
  margin: `26px 0 0 46px`,
  padding: `0 12px`,
  borderRadius: `1px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  textOverflow: `ellipses`,
  zIndex: `999`
};

const Map = (props) => {
  const { markers } = props  
  return(
      <GoogleMap
        ref={props.onMapLoad}
        onIdle={props.onIdle}
        options={{
          streetViewControl: false,
          mapTypeControl: false
        }}
        onDragEnd={props.recenter}
        center={props.center}
        zoom={15}>
        
        <SearchBox
          ref={props.handleSearchBoxMounted}
          inputPlaceholder="Find places near you"
          inputStyle={INPUT_STYLE}
          controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
          onPlacesChanged={props.onPlacesChanged}
          bounds={props.bounds} 
          />
        <PlaceDisplay
          mapRef={props.mapRef}
          places={props.places}
          controlPosition={window.google.maps.ControlPosition.LEFT_TOP}
          activeIndex={props.activeIndex} 
          handleAddPlace={props.handleAddPlace}
          />
        {markers.map( (marker, index) => {
          const onClick = () => props.onMarkerClick(marker);
          return(
            <Marker 
              position={marker.position}
              key={index}
              markersIndex={index}
              onClick={onClick}
              />
          )
        })}
      </GoogleMap>
      
  )
  
}

export default withGoogleMap(Map)