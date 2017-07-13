import React, { Component } from 'react';
import Piece from './Piece';

class Point extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let className = `point`;
    if (this.props.color){
      className += ` point-${this.props.color}`;
    }

    let pieces = [];
    for (let i = 0; i < this.props.point.n; i ++) {
      pieces.push(<Piece key={i} player={this.props.point.p} />)
    }

    return (
      <div className={className}>
        {this.props.number}
        {pieces}
      </div>
    );
  }
}

export default Point;
