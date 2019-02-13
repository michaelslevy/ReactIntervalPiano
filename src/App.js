import React, { Component } from 'react';

import ToneButton from "./components/ToneButton"

import LoadingIcon from "./preloader.gif"

/* font awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleUp, faAngleDown)

class App extends Component {

   state = {
      loading: true
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
                <ToneButton color='#1d1aab'><FontAwesomeIcon icon="angle-up" /></ToneButton>
                <ToneButton color='#ab1a1a'><FontAwesomeIcon icon="angle-up" /></ToneButton>
                <ToneButton color='#1aab65'><FontAwesomeIcon icon="angle-up" /></ToneButton>
                <ToneButton color='#1aa9ab'><FontAwesomeIcon icon="angle-up" /></ToneButton>
                <ToneButton color='#32ab1a'><FontAwesomeIcon icon="angle-up" /></ToneButton>
                <ToneButton color='#5b1aab'><FontAwesomeIcon icon="angle-up" /></ToneButton>
                <ToneButton color='#c85e1e'><FontAwesomeIcon icon="angle-up" /></ToneButton>
            </div>
            <div id="below">
              <ToneButton color='#1d1aab'><FontAwesomeIcon icon="angle-down" /></ToneButton>
              <ToneButton color='#ab1a1a'><FontAwesomeIcon icon="angle-down" /></ToneButton>
              <ToneButton color='#1aab65'><FontAwesomeIcon icon="angle-down" /></ToneButton>
              <ToneButton color='#1aa9ab'><FontAwesomeIcon icon="angle-down" /></ToneButton>
              <ToneButton color='#32ab1a'><FontAwesomeIcon icon="angle-down" /></ToneButton>
              <ToneButton color='#5b1aab'><FontAwesomeIcon icon="angle-down" /></ToneButton>
              <ToneButton color='#c85e1e'><FontAwesomeIcon icon="angle-down" /></ToneButton>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
