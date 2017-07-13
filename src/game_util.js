/*

     1  2  3  4  5  6     7  8  9 10 11 12
     a              b     b              a
     a              b     b              a
                    b     b              a
  H                 b                    a
  O                 b  B                 a
  M                    A
  E                 a  R                 b
                    a                    b
                    a     a              b
     b              a     a              b
     b              a     a              b
    24 23 22 21 20 19    18 17 16 15 14 13


player a goes clockwise, in + direction
player a home is 25
player a bar is 27

player b goes anticlockwise, in - direction
player b home is 0
player b bar is 26

*/

const assert = require('assert');

const utils = require('./utils');
// for convienece
const A = utils.consts.PLAYER_A;
const B = utils.consts.PLAYER_B;
const aHome = utils.consts.A_HOME;
const bHome = utils.consts.B_HOME;
const aBar = utils.consts.A_BAR;
const bBar = utils.consts.B_BAR;
const opp = utils.opp;
const oppBar = utils.oppBar;

class BoardLogic {
  constructor() {
    this.board = Object.assign({}, utils.defaultBoard);
    this.log();
  }

  log() {
    utils.log(this.board);
  }

  takePiece(player, place) {
    let point = this.board[place];
    point.n -= 1;
    if (point.n === 0) {
      // removed the last piece
      point.p = null;
    }
  }

  putPiece(player, place) {
    let point = this.board[place];
    point.p = player;
    point.n += 1;
  }

  movePiece(player, start, end) {
    let startPoint = this.board[start];
    let endPoint = this.board[end];

    this.takePiece(player, start);

    if (endPoint.p === opp(player)) {
      // CAPTURING A PIECE
      this.takePiece(opp(player), end);
      this.putPiece(opp(player), oppBar(player));
    }
    this.putPiece(player, end);
  }

  canMove(player, start, end) {
    let startPoint = this.board[start];
    let endPoint = this.board[end];

    // player has piece on start
    if (startPoint.p === player && startPoint.n > 0) {
    } else {
      return false;
    }
  }

  move(player, start, end) {}

  validateBoard() {}

  getState(){
    return { ...this.board};
  }
}

export default BoardLogic;
