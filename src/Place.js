/* 
    Stateless component for displaying the properties of each place  

*/

import React from 'react'
import { Toast, Card, Button } from 'react-materialize'
import './Places.css'

const Place = (props) => {
  const { place } = props 
  const activeClass = props.active ? 'active' : '' 
  return(
      <Card className={`place ${activeClass} `}>
        <Button flat
          style={{
            backgroundColor: 'transparent'
          }} 
          key={0} 
          waves='teal' 
          className='blue-text right hoverable' 
          icon='add'
          onClick={props.onAdd} />
        <h6>{place.name}</h6>
        <p>{place.formatted_address}</p>
        
      </Card>
  )
}

export default Place