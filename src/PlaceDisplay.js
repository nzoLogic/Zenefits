/*
    Stateful component that renders the results of the query to Google Places API 
*/

import React, { Component } from 'react'
import { Collection } from 'react-materialize'
import Place from './Place.js'
import { 
  mountPlaceElementToMap 
} from './utils/PlaceDisplayHelper.js'
import { onAdd } from './utils/PlaceStorageHelper.js'
import './Places.css'

const CONTAINER_STYLE = {
  height: `100vh`,
  backgroundColor: `#fff`,
  minWidth: `400px`,
  maxWidth: `400px`,
  overflow: `visible`,
  overflowY: `scroll`
}

class PlaceDisplay extends Component {
  constructor(props){
    super(props)
  }
  state = {
    activeCounter: 0,
    mapRendered: false 
  }
  componentWillReceiveProps(nextProps){
    const { mapRendered } = this.state
    const { props } = this 
    const mapRef = nextProps
                    .mapRef
                    .context
                    .__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED    
    if( !mapRendered && mapRef ){
      //uses google map reference to add custom controller 
      this.setState({mapRendered: true}, () =>{
        mountPlaceElementToMap(this.DOMref, props.controlPosition, mapRef)}) 
    }
  }
  
  componentDidUpdate(){
    const { activeIndex } =  this.state
    if( !this.placeList ) this.placeList = this.DOMref.children[0]
  }
  render(){
    const { places } = this.props 
    const { activeIndex } = this.props 
    
    return(
      <div 
        ref={(container) => {
          this.DOMref = container 
        }}
        style={CONTAINER_STYLE}
        className={`${places.length ? 'display' : 'hide' }`} >
          <Collection>
            { places.map( (place, index) => (
              <Place
                className="place" 
                place={place} 
                key={index}
                onAdd={onAdd.bind(null, place.id, place, this.props.handleAddPlace)}
                active={index === activeIndex} 
                />
            ))
          }
        </Collection>
      </div>
    )
  }
}

export default PlaceDisplay