import React, { Component } from 'react';
import Board from './Board';
import BoardLogic from './game_util';
import Move from './Move';

class Game extends Component {
  constructor(props) {
    super(props);
    this.makeMove = this.makeMove.bind(this);
    this.boardLogic = new BoardLogic();
    this.state = {
      board: this.boardLogic.getState()
    };
  }
  makeMove(move) {
    this.boardLogic.log();
    this.boardLogic.movePiece(move.player, move.from, move.to);
    this.boardLogic.log();
    this.setState({ board: this.boardLogic.getState() });
  }
  render() {
    console.log('render');
    let board = this.state.board;
    console.log(board);
    // board.movePiece('A', )
    return (
      <div className="App">
        <Board board={board} />
        <Move makeMove={this.makeMove} />
      </div>
    );
  }
}

export default Game;
