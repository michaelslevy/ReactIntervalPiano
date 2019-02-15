import React from 'react'
import Pizzicato from 'pizzicato'
import FindTone from "../musical/FindTone"

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
    this.stopNote=this.stopNote.bind(this);
  }

  componentDidMount(){
    let newNote=this.getNewNote();
    this.props.tonePositionHandler(newNote);

    let sound=new Pizzicato.Sound({
          source: 'wave',
          options: { type: 'sawtooth', frequency: newNote[0], release:.5 },
          volume: .1
    });

   if(this.state){this.setState({sound:sound});}
  }

  getNewNote=function(){
   let findTone=new FindTone();
    findTone.currentTonePosition=this.props.currentTonePosition; //position in index beow
    findTone.interval=this.props.interval; //musical interval
    findTone.direction=this.props.pitchDirection;
    let newNote=findTone.findNote();
    return(newNote);
  }

  playNote=function(e){
    e.preventDefault();

    (this.state && this.state.sound )?
    this.state.sound.play():
    console.log('sound not ready');

  }

  stopNote=function(e){
    e.preventDefault();

    (this.state && this.state.sound )?
    this.state.sound.stop():
    console.log('sound not ready');

  }

  render () {

    let styles = {
        backgroundColor: this.props.color
      };

    return (
      <button style={styles} onMouseDown={this.playNote} onMouseUp={this.stopNote} onMouseOut={this.stopNote} >
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
