import React, { Component } from 'react';
import Point from './Point';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: props.board
    };
  }

  render() {
    let board = this.state.board;
    let set1 = [board[1], board[2], board[3], board[4], board[5], board[6]];
    let set2 = [board[7], board[8], board[9], board[10], board[11], board[12]];
    let set3 = [
      board[13],
      board[14],
      board[15],
      board[16],
      board[17],
      board[18]
    ];
    let set4 = [
      board[19],
      board[20],
      board[21],
      board[22],
      board[23],
      board[24]
    ];

    return (
      <div className="board">
        <div className="board-row">
          <div className="set">
            <Point point={board.bHome} />
            {set1.map((point, index) => {
              return <Point point={point} key={index} number={index + 1} />;
            })}
          </div>
          <Point point={board.aBar} bar={true} />
          <div className="set">
            {set2.map((point, index) => {
              return <Point point={point} key={index} number={index + 7} />;
            })}
          </div>
        </div>
        <div className="board-row board-row-bottom">
          <div className="set set-bottom">
            {set3.map((point, index) => {
              return <Point point={point} key={index} number={index + 13} />;
            })}
          </div>
          <Point point={board.bBar} bar={true} />
          <div className="set set-bottom">
            {set4.map((point, index) => {
              return <Point point={point} key={index} number={index + 19} />;
            })}
            <Point point={board.aHome} />
          </div>
        </div>
      </div>
    );
  }
}
