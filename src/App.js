import React, { Component } from 'react';

import ToneButton from "./components/ToneButton"

import LoadingIcon from "./preloader.gif"

class App extends Component {

   state = {
      loading: true,
      currentTone:440,
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
              <img src={LoadingIcon} />
              <h1 style={h1Styles}>loading</h1>
             </div>
    }

    return (
      <div className="App">
        <h1>React Music Player</h1>
          <div id="Modifiers">
            <div id="above">
                <ToneButton color='#1d1aab' interval='2' pitchDirection="higher" />
                <ToneButton color='#ab1a1a' interval='1.15' pitchDirection="higher" />
                <ToneButton color='#1aab65' interval='1.3' pitchDirection="higher" />
                <ToneButton color='#1aa9ab' interval='1.45' pitchDirection="higher" />
                <ToneButton color='#32ab1a' interval='1.60' pitchDirection="higher" />
                <ToneButton color='#5b1aab' interval='1.75' pitchDirection="higher" />
                <ToneButton color='#c85e1e' interval='1.90' pitchDirection="higher" />
            </div>
            <div id="below">
              <ToneButton color='#1d1aab' interval='.5' pitchDirection="lower" />
              <ToneButton color='#ab1a1a' interval='.55' pitchDirection="lower" />
              <ToneButton color='#1aab65' interval='.63' pitchDirection="lower" />
              <ToneButton color='#1aa9ab' interval='.7' pitchDirection="lower" />
              <ToneButton color='#32ab1a' interval='.78' pitchDirection="lower" />
              <ToneButton color='#5b1aab' interval='.84' pitchDirection="lower" />
              <ToneButton color='#c85e1e' interval='.93' pitchDirection="lower" />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
