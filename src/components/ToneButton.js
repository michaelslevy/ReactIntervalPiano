import React from 'react'
import Pizzicato from 'pizzicato'

/* font awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleUp, faAngleDown)


class ToneButton extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      sound:null
    }

    this.playNote=this.playNote.bind(this);
  }

  componentDidMount(){
    let sound=new Pizzicato.Sound({
          source: 'wave',
          options: { type: 'sawtooth', frequency: 440 },
          volume: .1
    });

   if(this.state){this.setState({sound:sound});}
  }

  playNote=function(e){
    e.preventDefault();

    (this.state && this.state.sound )?
    this.state.sound.play():
    console.log('sound not ready');

  }

  render () {

    let styles = {
        backgroundColor: this.props.color
      };

    return (
      <button style={styles} onMouseDown={this.playNote} >
      {
        (this.props.pitchDirection==="higher")?
         <FontAwesomeIcon icon="angle-up" />:
         <FontAwesomeIcon icon="angle-down" />
      }

      </button>
    )
  }
}

export default ToneButton
