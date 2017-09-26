class Move {
  /*
   * Represents one row in the data provided by the server.
  */
  constructor(playerId, impact, row, col) {
    this._playerId = playerId;
    this._impact = impact;
    this._row = row;
    this._col = col;
  }

  getPlayerId() {
    return this._playerId;
  }

  getImpact() {
    return this._impact;
  }

  getRow() {
    return this._row;
  }

  getCol() {
    return this._col;
  }

  static sampleGame () {
    return [
      new Move(0, 'enter', 0, 0),
      new Move(1, 'enter', 0, 1),
      new Move(2, 'enter', 0, 2),
      new Move(3, 'lose', 0, 0),

      new Move(0, 'miss', 0, 4),
      new Move(1, 'miss', 0, 5),
      new Move(2, 'miss', 0, 6),
      new Move(0, 'miss', 0, 7),
      new Move(1, 'miss', 0, 8),
      new Move(2, 'miss', 0, 9),

      new Move(0, 'miss', 1, 4),
      new Move(1, 'miss', 1, 5),
      new Move(2, 'miss', 1, 6),
      new Move(0, 'miss', 1, 7),
      new Move(1, 'miss', 1, 8),
      new Move(2, 'miss', 1, 9),

      new Move(0, 'miss', 2, 4),
      new Move(1, 'miss', 2, 5),
      new Move(2, 'miss', 2, 6),
      new Move(0, 'miss', 2, 7),
      new Move(1, 'miss', 2, 8),
      new Move(2, 'miss', 2, 9),

      new Move(0, 'hit', 0, 1),
      new Move(1, 'lose', 0, 0),
      new Move(1, 'miss', 2, 5),
      new Move(2, 'miss', 2, 6),
      new Move(0, 'miss', 2, 7),
      new Move(2, 'miss', 2, 9),

      new Move(0, 'hit', 0, 2),
      new Move(2, 'lose', 0, 0),
      new Move(2, 'miss', 2, 6),
      new Move(0, 'win', 0, 0),
    ];
  }

  static sampleGameExternalPlayer () {
    return [
      new Move(0, 'enter', 0, 0),
      new Move(1, 'enter', 0, 1),
      new Move(2, 'enter', 0, 2),
      new Move(3, 'enter', 0, 3),
      new Move(4, 'enter', 0, 4),

      new Move(0, 'hit', 0, 4),
      new Move(1, 'miss', 0, 5),
      new Move(2, 'miss', 0, 6),
      new Move(4, 'lose', 0, 4),
      new Move(0, 'miss', 0, 7),
      new Move(1, 'miss', 0, 8),
      new Move(2, 'miss', 0, 9),


      new Move(0, 'miss', 1, 4),
      new Move(1, 'miss', 1, 5),
      new Move(2, 'miss', 1, 6),
      new Move(0, 'miss', 1, 7),
      new Move(1, 'miss', 1, 8),
      new Move(2, 'miss', 1, 9),

      new Move(0, 'miss', 2, 4),
      new Move(1, 'miss', 2, 5),
      new Move(2, 'miss', 2, 6),
      new Move(0, 'miss', 2, 7),
      new Move(1, 'miss', 2, 8),
      new Move(2, 'miss', 2, 9),

      new Move(0, 'hit', 0, 1),
      new Move(1, 'lose', 0, 0),
      new Move(1, 'miss', 2, 5),
      new Move(2, 'miss', 2, 6),
      new Move(0, 'miss', 2, 7),
      new Move(2, 'miss', 2, 9),

      new Move(0, 'hit', 0, 2),
      new Move(2, 'lose', 0, 0),
      new Move(2, 'miss', 2, 6),
      new Move(0, 'win', 0, 0),
    ];
  }

}

export default Move;