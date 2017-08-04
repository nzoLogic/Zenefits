/* 
    Stateful component for displaying user's saved places 
    
*/


import React from 'react'
import { 
  SideNav, 
  SideNavItem, 
  Button, 
  CollapsibleItem } from 'react-materialize'
import { onDelete } from './utils/PlaceStorageHelper.js'
import Tutorial from './Tutorial.js'

const UserPlaces = (props) => {
  const places = Object.values(props.places)
  const keys = Object.keys(props.places)
  
  return(
    <div>
      <SideNav
        options={{
          edge: 'right',
        }}
        trigger={
          <Button id="users-places"
            floating
            icon='dehaze'
            style={{
              position: `fixed`,
              top: `36px`,
              right: `46px`,
              zIndex: `998`}} 
              />
          }>
          <SideNavItem className='center'>
            <h5>Your Places</h5>
          </SideNavItem>
          <SideNavItem divider />
          { places.map( (place, index) => (
            <CollapsibleItem 
              key={index} 
              header={place.name}
              className="left-align" >
              <Button flat
                className='red-text right hoverable'
                style={{
                  backgroundColor: 'transparent'}}
                  onClick={onDelete.bind(null, keys[index], props.handleDeletedPlace)}
                  icon='close'/>
                <span>
                  {place.formatted_address}
                </span>
              </CollapsibleItem>
            ))
          }
        </SideNav>
    </div>
  )
}

export default UserPlaces