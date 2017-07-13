import React, { Component } from 'react';

class Piece extends Component {
  render() {
    let classes = 'piece';
    if (this.props.player === 'B'){
      classes += ' piece-red';
    }
    return <div className={classes}></div>;
  }
}

export default Piece;
