import React from 'react'
import Pizzicato from 'pizzicato'

/* font awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleUp, faAngleDown)


class ToneButton extends React.Component {

  playNote=function(e){

    e.preventDefault();
    var sound = new Pizzicato.Sound({
        source: 'wave',
        options: { type: 'sawtooth', frequency: 440 },
        volume: .5
    });

    sound.play();

  }

  render () {

    let styles = {
        backgroundColor: this.props.color
      };

    return (
      <button style={styles} onClick={this.playNote} >
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
