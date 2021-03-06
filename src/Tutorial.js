import React, { Component } from 'react'
import { Button } from 'react-materialize'
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

class Tutorial extends Component {
    state = {
      index: 0
    }
  
  animate = () => {
    const _tutorial = this._tutorial
    let index = this.state.index + 1
    if(index === 2){
      _tutorial[index].className += ' show'
      _tutorial[index + 1].className += ' fade'
      this.setState({index: index + 1})
    }
    else if(_tutorial[index]){
      _tutorial[index].className += ' fade'
      this.setState({index: index})
    }
    else {
      clearInterval(this.state.tutorialId) 
      this._background.style.display = 'none'
    }
  }
  
  setDomRef = (e) => {
    if(e && !this._tutorial) this._tutorial = [...e.children] 
    if( e && !this._background ) this._background = e 
  }
  
  componentDidMount(){
    let tutorialId = setInterval(this.animate, 6000)
    this.setState({tutorialId: tutorialId})
  }
  render(){
    return(
      <div className="tutorial-background fade-background" ref={this.setDomRef}>
        <div className="tutorial-welcome white-text hidden fade">
          <h3>Welcome to <b>Places Search</b></h3>
          <p className="center">powered by Google</p>
        </div>
        <div className="tutorial-search white-text hidden">
          <input id="demo-search" placeholder="Find places near you" autoFocus></input>
          <label for="demo-search" className="white-text">
            <h6>Search for awesome places near you</h6>
          </label>
        </div>
        <Button floating 
          icon="dehaze" 
          className="hidden cyan tutorial-button"/>
        <div style={SAVED_PLACES} className="hidden">
          <div id="places-background" className="cyan" style={TUTORIAL_TARGET} >
            <div className="white-text" style={TUTORIAL_CONTENT}>
              <h5>Save Your Places</h5>
              <p>Find an interesting place you want to come back to later? No problem!</p>
              <p>All your saved places are stored here for future use</p>
            </div>      
          </div>
        </div>

       </div>
    )
  }
}

export default Tutorial 