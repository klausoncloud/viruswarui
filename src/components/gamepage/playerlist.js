import React, { Component } from 'react';

import Player from './../../model/player'

class PlayerList extends Component {

  handleSelectionChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.props.setPlayerType(name, value);
  }

  renderPlayerIcon(player) {

    if (player.getStatus() !== Player.LOST) {
      return (
        <i className="fa fa-code fa-fw" style={{color: player.getColorCellOccupied() }}></i>
      );
    } else {
      return (
        <i className="fa fa-ban fa-fw" style={{color: player.getColorCellOccupied() }}></i>
      );
    }
  }

  render() {

    return (
      <div className="container">

        <label>Programs</label>
        {
          this.props.players.map ( player => 
            <div className="input-group" key={ player.getId() } >
              <span className="input-group-addon bg-light" id="addonState">
                { this.renderPlayerIcon(player) }
              </span>
              <span className="input-group-addon bg-light" id="addonId">{ player.getId() + 1 }</span>
              <select className="form-control" id={ player.getId() } 
                 name={ player.getId() } onChange={ (event) => { this.handleSelectionChange(event) } }>

                { this.props.playerTypes.map( 
                  type => <option key={ type.data } value={ type.data } > { type.description } </option>)}

              </select>
            </div> )
        }
          
      </div>
    );
  }
}

export default PlayerList;