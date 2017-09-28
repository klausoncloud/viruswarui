import React, { Component } from 'react';

class GameControl extends Component {

  handleButtonPressed() {
    this.props.startButtonHandler(this.props.players, this.props.playerTypes);
  }

  render() {
    return (
        <div className="col d-flex justify-content-center">
          <button className="btn btn-success"
            onClick={ () => { this.handleButtonPressed() } }
          >
            Run Game
          </button>
      </div>
    );
  }
}

export default GameControl;