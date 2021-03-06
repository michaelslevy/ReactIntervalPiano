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
      sound:null,
      noteLetter:"A",
      opacity:1
    }

    this.playNote=this.playNote.bind(this);
    this.stopNote=this.stopNote.bind(this);
  }

  componentDidMount(){
    let newNote=this.getNewNote();
    let sound=new Pizzicato.Sound({
          source: 'wave',
          options: { type: 'sawtooth', frequency: newNote[0], release:.5 },
          volume: .1
    });

   if(this.state){this.setState({sound:sound,noteLetter:newNote[1] });}
  }

  componentDidUpdate(oldProps){
    const newProps = this.props;
    if(oldProps.currentTonePosition !== newProps.currentTonePosition) {
      let newNote=this.getNewNote();
      (newNote==='invalid')? this.setState({opacity:0}):this.setState({opacity:1, noteLetter:newNote[1]})
    }
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
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
    e.cancelBubble = true;
    e.returnValue = false;

    window.oncontextmenu = function(event) {
       event.preventDefault();
       event.stopPropagation();
       return false;
     };

    let newNote=this.getNewNote();

    if(newNote.length===3){
      this.props.tonePositionHandler(newNote[2]);
      //this.state.sound.frequency=newNote[0];
      let newSound=this.state.sound;
      newSound.frequency=newNote[0];
      this.setState({sound: newSound });

      (this.state && this.state.sound )?
      this.state.sound.play():
      console.log('sound not ready');
    }

  }

  stopNote=function(e){
    e.preventDefault();

    (this.state && this.state.sound )?
    this.state.sound.stop():
    console.log('sound not ready');

  }

  render () {

    let styles = {
        backgroundColor: this.props.color,
        opacity:this.state.opacity
      };

    return (
      <button style={styles} onTouchStart={this.playNote} onMouseDown={this.playNote} onTouchEnd={this.stopNote} onMouseUp={this.stopNote} onMouseOut={this.stopNote} >
        <span className='name'>{this.props.name}</span>
        <span className='pointer'>
      {
        (this.props.pitchDirection==="higher")?
         <FontAwesomeIcon icon="angle-up" />:
         <FontAwesomeIcon icon="angle-down" />
      }
        </span>
        <span className='letter'>{this.state.noteLetter}</span>

      </button>
    )
  }
}

export default ToneButton
