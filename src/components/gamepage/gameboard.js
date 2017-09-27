import React, { Component } from 'react';

import Player from './../../model/player';

const boardDims = {
  boardLength : 400,
  tileLength : 10
}

class GameBoard extends Component {
  constructor(props) {
    super();

    // I am confused. Should this be part of the state?
    this.moves = [];
    this.nextMove = 0;
  }

  clearCanvas() {
    let ctx = document.getElementById("gameBoardCanvas").getContext("2d");
    ctx.clearRect(0, 0, boardDims.boardLength, boardDims.boardLength);

    let maxIdx = boardDims.boardLength / boardDims.tileLength;
    for (let row = 0; row < maxIdx; row++) {
      for (let col = 0; col < maxIdx; col++) {
        if (col % 2 === row % 2) {
          let pixLen = boardDims.tileLength;
          let pixCol = col * pixLen;
          let pixRow = row * pixLen;
          // To do: the color should be the page background. Should be in css
          ctx.fillStyle = "white";
          ctx.fillRect(pixCol, pixRow, pixLen, pixLen);
        }
      }
    }
  }

  visualizeMove(move) {
    let ctx = document.getElementById("gameBoardCanvas").getContext("2d");
    let len = boardDims.tileLength;
    let row = move.getRow() * len;
    let col = move.getCol() * len;

    let player = this.props.players[move.getPlayerId()];

    switch (move.getImpact()) {

          case 'exit':
            ctx.clearRect(col, row, len, len);
            break;
          case 'hit' :
            ctx.strokeStyle = player.getColorCellHit();
            ctx.moveTo(col, row);
            ctx.lineTo(col + len, row + len);
            ctx.stroke();
            ctx.moveTo(col, row + len);
            ctx.lineTo(col + len, row);
            ctx.stroke();
            break;
          case 'miss':
            ctx.fillStyle = player.getColorCellMiss();
            ctx.beginPath();
            ctx.arc(col + len/2, row + len/2, len/3, 0, 2*Math.PI);
            ctx.fill();
            break;
          case 'enter':
            ctx.fillStyle = player.getColorCellOccupied();
            //ctx.fillRect(col, row, len, len);
            ctx.beginPath();
            ctx.moveTo(col, row + len/2);
            ctx.lineTo(col + len/2, row);
            ctx.lineTo(col + len, row + len/2);
            ctx.lineTo(col + len/2, row + len);
            ctx.lineTo(col, row + len/2);
            ctx.fill();
            break;
          case 'lose':
            this.props.setPlayerStatus(player.getId(), Player.LOST);
            break;
          case 'win':
            this.props.setPlayerStatus(player.getId(), Player.WON);
            break;
          default:
            break;
          }

  }

  endVisualizeGame() {
    this.props.setGameOver();
  }

  setupGameVisualization() {
    this.nextMove = 0;
      
    this.interval = setInterval(() => {
      if (this.moves !== this.props.moves) {

        this.moves = this.props.moves
        this.clearCanvas();
        this.nextMove = 0;
      }

      if (this.props.moves != null && this.nextMove < this.props.moves.length) {
        this.visualizeMove(this.props.moves[this.nextMove]);
        this.nextMove++;
      } else {
        if (this.props.gameViz === 'RUNNING') {
          this.endVisualizeGame();
        }
      }
    }, 20);
  }

  componentDidMount() {
    this.clearCanvas();
    if (this.props.storedCanvas != null) {
      let ctx = document.getElementById("gameBoardCanvas").getContext("2d");
      ctx.putImageData(this.props.storedCanvas, 0, 0);
    }
  }

  componentWillUnmount() {
    // stop the thread
    if (this.props.gameViz === 'RUNNING') {
      clearInterval(this.interval);
    }

    let ctx = document.getElementById("gameBoardCanvas").getContext("2d");
    let image = ctx.getImageData(0, 0, boardDims.boardLength, boardDims.boardLength);
    this.props.storeCanvas(image);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.gameViz !== this.props.gameViz) {

      if (this.props.gameViz === 'IDLE') {
        clearInterval(this.interval);
      } else {
        // Start the thread
        this.clearCanvas();
        this.setupGameVisualization();
      }
    }
  }

  render() {

    return (
      <div ref="gameboardContainer" className="container" id="canvascontainer">
       
        <canvas className="gameboard bg-light" id="gameBoardCanvas" 
          width = { boardDims.boardLength }
          height = { boardDims.boardLength } >
        </canvas>

      </div>
    );
  }
}

export default GameBoard;