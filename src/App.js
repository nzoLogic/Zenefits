/* 
  Main stateful component responsible for managing the state of user's location, markers, places, and user's places saved in the browser

*/


import React, { Component } from 'react'
import './App.css'
import Map from './Map.js'
import UserPlaces from './UserPlaces.js'
import { checkStoredLocation, saveUserLocation } from './utils/UserHelpers.js'
import { getPlaces } from './utils/PlaceStorageHelper.js'

class App extends Component {
  constructor(props){
    super(props)
    this.onMapLoad = this.onMapLoad.bind(this)
    this.onIdle = this.onIdle.bind(this)
    this.recenter = this.recenter.bind(this)
    this.handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this)
    this.onPlacesChanged = this.onPlacesChanged.bind(this)
    this.handleMarkerClick = this.handleMarkerClick.bind(this)
    this.handleDeletedPlace = this.handleDeletedPlace.bind(this)
    this.handleAddPlace = this.handleAddPlace.bind(this)
  }
  state = {
    bounds: null,
    location: checkStoredLocation('lastLocation') || null,
    center: this.location || {
      lat: 37.7749, 
      lng: -122.4194
    },
    places: [],
    markers: [],
    usersSavedPlaces: getPlaces()
  };
  componentWillMount(){
    this.state.location === null && this.getUsersLocation()
  }
  onMapLoad(map){
    this._map = map 
  }
  onIdle(map){
    this.setState({
      bounds: this._map.getBounds()
    })
  }
  handleMarkerClick(target){
    const { markers } = this.state
    this.setState({activeIndex: markers.findIndex((marker) => {
      if(marker === target) return{ ...marker, showInfo: true}
      return null
    })})
  }
  handleSearchBoxMounted(searchBox){
    this._searchBox = searchBox
  }
  handleDeletedPlace(places){
    this.setState({usersSavedPlaces: places})
  }
  handleAddPlace(places){
    this.setState({usersSavedPlaces: places})
  }
  onPlacesChanged(){
    // updates marker, places, center and activeIndex state based on returned Places API results

    const places = this._searchBox.getPlaces()
    console.log(places[0])
    const markers = places.map(place => ({
      position: place.geometry.location,
      place: place 
    }))
    const center = markers[0].position || this.state.center
    const activeIndex = 0
    
    this.setState({
      markers: markers,
      places: places,
      center: center,
      activeIndex: activeIndex
    })
  }
  recenter(map){
    const bounds = this._map.getBounds()
    this.setState({bounds: bounds})
  }
  getUsersLocation(){
    //updates state and lastLocation(stored in browser) based on users location
    
    navigator.geolocation.getCurrentPosition(({ coords },{ latitude, longitude }= coords) =>{
      const location = {lat: latitude, lng: longitude}
      this.setState({
        location: location, 
        center: location
      }, saveUserLocation.call(null, JSON.stringify(location)))
    })
  }
  
  render(){
    const { state } = this  
    return(
      <div className="App">
        <UserPlaces 
          places={state.usersSavedPlaces} 
          handleDeletedPlace={this.handleDeletedPlace}
          />
        <Map
          loadingElement={
            <div style={{ height: `100%` }}>
              loading...
            </div>
          }
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div ref="map" id="map" style={{ height: `100%` }} />
          }
          onMapLoad={this.onMapLoad}
          mapRef={this._map}
          onIdle={this.onIdle}
          center={state.center}
          location={state.location}
          bounds={state.bounds}
          handleSearchBoxMounted={this.handleSearchBoxMounted}
          onPlacesChanged={this.onPlacesChanged}
          handleAddPlace={this.handleAddPlace}
          recenter={this.recenter}
          markers={state.markers}
          places={state.places}
          onMarkerClick={this.handleMarkerClick}
          activeIndex={state.activeIndex || 0}
        />
      </div>
    )
  }
}

export default App