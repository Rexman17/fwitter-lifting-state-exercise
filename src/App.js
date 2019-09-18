import React from 'react'
import DarkModeWrapper from './DarkModeWrapper'
import Header from './Header'
import TweetsContainer from './TweetsContainer'

class App extends React.Component {

  state = {
    darkMode: false
  }

  toggleDarkMode = (e) => {
    this.setState({
      darkMode: !this.state.darkMode
    })
  }

  render () {
      return (
        <DarkModeWrapper darkMode={this.state.darkMode} toggle={this.toggleDarkMode}>
          <Header darkMode={this.state.darkMode} toggle={this.toggleDarkMode}/>
          <TweetsContainer />
      </DarkModeWrapper>
      )
  }
}

export default App
