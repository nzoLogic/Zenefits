import React, { Component } from 'react'
import AlertContainer from 'react-alert'

class SaveAlert extends Component {
  alertOptions = {
    offest: 14,
    position: 'top right',
    theme: 'light',
    time: 5000,
    transition: 'scale'
  }
  showAlert = () => {
    console.log('click')
    this.msg.success('Place Saved!', {
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