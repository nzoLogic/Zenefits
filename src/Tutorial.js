import React, { Component } from 'react'
import './Tutorial.css'

const SAVED_PLACES = {
  width: '800px',
  height: '800px',
  visibility: 'visibile',
  right: '-348px',
  top: '-327px',
  position: 'fixed',
  zIndex: '996'
}
const TUTORIAL_TARGET = {
  position: 'absolute',
  borderRadius: '50%',
  height: '100%',
  width: '100%',
  transition: '2s'
}
const TUTORIAL_CONTENT = {
  width: '456px',
  height: '500px',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
  padding: '56px',
  verticalAlign: 'top',
  marginTop: '40%',
  position: 'absolute',
  display: 'table-cell',
}

const BUTTON_CIRCLE = {
  top: '16px',
  right: '25px',
  width: '80px',
  height: '80px',
  position: 'absolute',
  backgroundColor: 'white',
  borderRadius: '50%',
  zIndex: '996'
}

class Tutorial extends Component {
    state = {
      index: 0
    }
  
  animate = () => {
    const _tutorial = this._tutorial
    let index = this.state.index + 1
    if(_tutorial[index]){
      _tutorial[index].className += ' fade'
      this.setState({index: index})
    }
    else clearInterval(this.state.tutorialId) 
    console.log(_tutorial[index])
    
  }
  
  setDomRef = (e) => {
    if(e && !this._tutorial) this._tutorial = [...e.children] 
  }
  
  componentDidMount(){
    console.log(this._tutorial)
    let tutorialId = setInterval(this.animate, 6000)
    this.setState({tutorialId: tutorialId})
  }
  render(){
    return(
      <div className="tutorial-background" ref={this.setDomRef}>
        <div className="tutorial-welcome white-text hidden fade">
          <h3>Welcome to <b>Places Search</b></h3>
          <p className="center">powered by Google</p>
        </div>
        <div className="tutorial-search white-text hidden">
          <input id="demo-search" placeholder="Find places near you"></input>
          <label for="demo-search" className="white-text">
            <h6>Search for awesome places near you</h6>
          </label>
        </div>
        <div style={SAVED_PLACES} className="hidden">
          <div id="places-background" className="cyan" style={TUTORIAL_TARGET} >
            <div className="white-text" style={TUTORIAL_CONTENT}>
              <h5>Save Your Places</h5>
              <p>Find an interesting place you want to come back to later? No problem!</p>
              <p>All your saved places are stored here for future use</p>
            </div>      
          </div>
        </div>
        <div className="hidden" style={BUTTON_CIRCLE} />
      </div>
    )
  }
}

export default Tutorial 