import React, { Component } from 'react';

import ToneButton from "./components/ToneButton"

import LoadingIcon from "./preloader.gif"

class App extends Component {

  constructor(props) {
    super(props);
     this.state = {
        loading: true,
        currentTonePosition:57,
      };
      this.tonePositionHandler=this.tonePositionHandler.bind(this);

    }

  componentDidMount() {
    // the setTimeout just simulates an async action, after which the component will render the content
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  tonePositionHandler(midiPosition){
    //note array in FindTone starts with 12
    let pos=midiPosition-12;
    this.setState({currentTonePosition:pos});
  }

  render() {

    const { loading } = this.state;
    if(loading) {

      const divStyles = {
        textAlign: 'center',
        marginTop: '10%'
      }

      return <div style={divStyles}>
              <img src={LoadingIcon} alt='loading' />
             </div>
    }

    return (
      <div className="App">
        <h1>Interval Music Piano</h1>
        <p>Keys play the next interval, unison, first, second, third, etc... </p>
          <div id="Modifiers">
            <div id="above" className='intervalGroup'>
                <ToneButton name='unison' tonePositionHandler={this.tonePositionHandler} currentTonePosition={this.state.currentTonePosition} color='#1d1aab' interval={0} pitchDirection="higher" />
                <ToneButton name='second' tonePositionHandler={this.tonePositionHandler} currentTonePosition={this.state.currentTonePosition} color='#ab1a1a' interval={2} pitchDirection="higher" />
                <ToneButton name='third' tonePositionHandler={this.tonePositionHandler} currentTonePosition={this.state.currentTonePosition} color='#1aab65' interval={4} pitchDirection="higher" />
                <ToneButton name='fourth' tonePositionHandler={this.tonePositionHandler} currentTonePosition={this.state.currentTonePosition} color='#1aa9ab' interval={5} pitchDirection="higher" />
                <ToneButton name='fifth' tonePositionHandler={this.tonePositionHandler} currentTonePosition={this.state.currentTonePosition} color='#32ab1a' interval={7} pitchDirection="higher" />
                <ToneButton name='sixth' tonePositionHandler={this.tonePositionHandler} currentTonePosition={this.state.currentTonePosition} color='#5b1aab' interval={9} pitchDirection="higher" />
                <ToneButton name='seventh' tonePositionHandler={this.tonePositionHandler} currentTonePosition={this.state.currentTonePosition} color='#c85e1e' interval={11} pitchDirection="higher" />
                <ToneButton name='octave' tonePositionHandler={this.tonePositionHandler} currentTonePosition={this.state.currentTonePosition} color='#1d1aab' interval={12} pitchDirection="higher" />
            </div>
            <div id="below" className='intervalGroup'>
              <ToneButton name='unison' tonePositionHandler={this.tonePositionHandler} currentTonePosition={this.state.currentTonePosition} color='#1d1aab' interval={0} pitchDirection="lower" />
              <ToneButton name='second' tonePositionHandler={this.tonePositionHandler} currentTonePosition={this.state.currentTonePosition} color='#ab1a1a' interval={2} pitchDirection="lower" />
              <ToneButton name='third' tonePositionHandler={this.tonePositionHandler} currentTonePosition={this.state.currentTonePosition} color='#1aab65' interval={4} pitchDirection="lower" />
              <ToneButton name='fourth' tonePositionHandler={this.tonePositionHandler} currentTonePosition={this.state.currentTonePosition} color='#1aa9ab' interval={5} pitchDirection="lower" />
              <ToneButton name='fifth' tonePositionHandler={this.tonePositionHandler} currentTonePosition={this.state.currentTonePosition} color='#32ab1a' interval={7} pitchDirection="lower" />
              <ToneButton name='sixth' tonePositionHandler={this.tonePositionHandler} currentTonePosition={this.state.currentTonePosition} color='#5b1aab' interval={9} pitchDirection="lower" />
              <ToneButton name='seventh' tonePositionHandler={this.tonePositionHandler} currentTonePosition={this.state.currentTonePosition} color='#c85e1e' interval={11} pitchDirection="lower" />
              <ToneButton name='octave' tonePositionHandler={this.tonePositionHandler} currentTonePosition={this.state.currentTonePosition} color='#1d1aab' interval={12} pitchDirection="lower" />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
