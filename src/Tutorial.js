import React, { Component } from 'react'
import './Tutorial.css'

const TUTORIAL_BACKGROUND = {
  zIndex: '996', 
  height: '100vh', 
  width: '100vw',
  position: 'absolute',
  backgroundColor: 'rgba(0, 0, 0, .77)'
}
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
  constructor(props){
    super(props)
    this.state = {
      index: 0
    }
  }
  
  animate = () => {
    const _tutorial = this._tutorial
    let index = this.state.index 
    if(_tutorial[index]){
      _tutorial[index].className += ' fade'
      this.setState({index: index+1})
    }
    else clearInterval(this.state.tutorialId) 
    console.log(_tutorial[index])
    
  }
  
  setDomRef = (e) => {
    if(e && !this._tutorial) this._tutorial = [...e.children] 
  }
  
  componentDidMount(){
    // this.startTutorial(this.animate, 1000)
    let tutorialId = setInterval(this.animate, 6000)
    this.setState({tutorialId: tutorialId})
    console.log('component mounted')
  }
  render(){
    return(
      <div style={TUTORIAL_BACKGROUND} ref={this.setDomRef}>
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
        <div className="hidden" style={BUTTON_CIRCLE} />
      </div>
    )
  }
}

export default Tutorial 