import React from 'react'

class ToneButton extends React.Component {

  render () {

    let styles = {
        backgroundColor: this.props.color
      };

    return (
      <button style={styles} >{this.props.children}</button>
    )
  }
}

export default ToneButton
