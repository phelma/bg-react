import React, { Component } from 'react';

class Move extends Component {
  makeMove(event) {
    event.preventDefault();
    const move = {
      player: this.player.value,
      from: this.from.value,
      to: this.to.value
    };
    this.props.makeMove(move);
    this.moveForm.reset();
  }
  render() {
    return (
      <form
        ref={input => (this.moveForm = input)}
        onSubmit={e => this.makeMove(e)}
      >
        <select ref={input => (this.player = input)} type="text">
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
        <input
          type="number"
          ref={input => (this.from = input)}
          placeholder="From"
        />
        <input
          type="number"
          ref={input => (this.to = input)}
          placeholder="To"
        />
        <button type="submit">DO MOVE</button>
      </form>
    );
  }
}

export default Move;
