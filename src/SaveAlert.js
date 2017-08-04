import React, { Component } from 'react'
import AlertContainer from 'react-alert'

const ALERT_OPTIONS = {
  offest: 14,
  position: 'top right',
  theme: 'dark',
  time: 2000,
  transition: 'scale'
}

class SaveAlert extends Component {
  alertOptions = {
    offest: 14,
    position: 'top right',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }
  showAlert = () => {
    console.log('click')
    this.msg.show('Place Saved!', {
      time: 2000
    })
  }
  
  render(){
    return(
      <div>
        <AlertContainer 
          ref={ a => {
              this.msg = a
          }}
          { ...this.alertOptions } 
          /> 
      </div>
    )
  }
}

export default SaveAlert