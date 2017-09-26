import React, { Component } from 'react';

import GameBoardCon from './../../containers/gameboardcon';
import GameControlCon from './../../containers/gamecontrolcon';
import PlayerList from './playerlist';



class TheGame extends Component {

  handlePlayerTypeSelection(playerId, playerTypeId) {
    console.log("Player selection event.");
    console.log("Player :", playerId);
    console.log("Type :", playerTypeId);

    // Todo: Store the changed selection.
    // Do we need to create new Player objects? Would be clean. But not needed?
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.messages !== this.props.messages) {
      let textarea = document.getElementById("messageArea");
      textarea.scrollTop = textarea.scrollHeight;
    }
  }

  render() {

    return (
      <div className="container">

        <div className="row">

          <div className="col-7">
            <GameBoardCon />
          </div> 
        
          <div className="col-5  d-flex flex-column gameboardContainer">

            <div className="playerControls">
              <PlayerList 
                players={ this.props.players } 
                playerTypes={ this.props.playerTypes } 
                selectChangeHandler = { (playerId, playerTypeId) => { this.handlePlayerTypeSelection(playerId, playerTypeId) } }
              />
            </div>

            <div className="messageBox mt-auto">
              <div className="container">
                <textarea className="messageArea" style = {{ width : "100%" }}
                  id="messageArea" rows="4" cols="25" readOnly
                  value = { this.props.messages } >
                </textarea>
              </div>
            </div>

            <div className="startButton mt-auto">
              <GameControlCon />
            </div> 
          </div>

        </div>

      </div>
    );
  }
}

export default TheGame;