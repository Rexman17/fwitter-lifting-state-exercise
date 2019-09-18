
import React from 'react'
import DarkModeWrapper from './DarkModeWrapper'
import Header from './Header'
import TweetsContainer from './TweetsContainer'

class App extends React.Component {

  state = {
    darkMode: false
  }


    handleToggle = () => {
      // change the darkmode state
      this.setState({
        darkMode: !this.state.darkMode
      })
    }


  render () {
    return (
      <DarkModeWrapper darkMode={this.state.darkMode} >
        <Header darkMode={this.state.darkMode} handleToggle={this.handleToggle} />
        <TweetsContainer />
      </DarkModeWrapper>
    )
  }

}

export default App
