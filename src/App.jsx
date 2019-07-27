import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.toggleButtonClickHandler = this.toggleButtonClickHandler.bind(this)
    this.state = {
      toggleButtonState: 'active'
    }
  }

  toggleButtonClickHandler(e) {
    e.preventDefault()
    this.setState(state => {
      let newState = state.toggleButtonState
      newState = newState === 'active' ? 'inactive' : 'active'

      return {
        toggleButtonState: newState
      }
    })
  }

  render() {
    return (
      <div className="App">
        <ToggleButton state={this.state.toggleButtonState} clickHandler={this.toggleButtonClickHandler}/>
      </div>
    )
  }
}

export default App;
