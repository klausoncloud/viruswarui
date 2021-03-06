import React, { Component } from 'react';

import GameBoardCon from './../../containers/gameboardcon';
import GameControlCon from './../../containers/gamecontrolcon';
import PlayerListCon from './../../containers/playerlistcon';



class TheGame extends Component {

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
              <PlayerListCon />
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