import React, { Component } from 'react';

import ToneButton from "./components/ToneButton"

import LoadingIcon from "./preloader.gif"

class App extends Component {

 state = {
    loading: true,
    currentTonePosition:57,
  };

  componentDidMount() {
    // the setTimeout just simulates an async action, after which the component will render the content
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {

    const { loading } = this.state;
    if(loading) {

      const divStyles = {
        textAlign: 'center',
        marginTop: '10%'
      }

      const h1Styles = {
        fontSize:'4em',
        fontFamily:'"century gothic", "open-sans", arial,sans-serif',
        };

      return <div style={divStyles}>
              <img src={LoadingIcon} alt='loading' />
              <h1 style={h1Styles}>loading</h1>
             </div>
    }

    return (
      <div className="App">
        <h1>React Music Player</h1>
          <div id="Modifiers">
            <div id="above">
                <ToneButton currentTonePosition={this.state.currentTonePosition} color='#ab1a1a' interval={2} pitchDirection="higher" />
                <ToneButton currentTonePosition={this.state.currentTonePosition} color='#1aab65' interval={4} pitchDirection="higher" />
                <ToneButton currentTonePosition={this.state.currentTonePosition} color='#1aa9ab' interval={5} pitchDirection="higher" />
                <ToneButton currentTonePosition={this.state.currentTonePosition} color='#32ab1a' interval={7} pitchDirection="higher" />
                <ToneButton currentTonePosition={this.state.currentTonePosition} color='#5b1aab' interval={9} pitchDirection="higher" />
                <ToneButton currentTonePosition={this.state.currentTonePosition} color='#c85e1e' interval={11} pitchDirection="higher" />
                <ToneButton currentTonePosition={this.state.currentTonePosition} color='#1d1aab' interval={12} pitchDirection="higher" />
            </div>
            <div id="below">
              <ToneButton currentTonePosition={this.state.currentTonePosition} color='#ab1a1a' interval={2} pitchDirection="lower" />
              <ToneButton currentTonePosition={this.state.currentTonePosition} color='#1aab65' interval={4} pitchDirection="lower" />
              <ToneButton currentTonePosition={this.state.currentTonePosition} color='#1aa9ab' interval={5} pitchDirection="lower" />
              <ToneButton currentTonePosition={this.state.currentTonePosition} color='#32ab1a' interval={7} pitchDirection="lower" />
              <ToneButton currentTonePosition={this.state.currentTonePosition} color='#5b1aab' interval={9} pitchDirection="lower" />
              <ToneButton currentTonePosition={this.state.currentTonePosition} color='#c85e1e' interval={11} pitchDirection="lower" />
              <ToneButton currentTonePosition={this.state.currentTonePosition} color='#1d1aab' interval={12} pitchDirection="lower" />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
