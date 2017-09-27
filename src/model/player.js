class Player {

  static ALIVE = 'alive';
  static LOST = 'lost';
  static WON = 'won';

  constructor(id, name, type, colorCellOccupied, colorCellHit, colorCellMiss, status = Player.ALIVE) {
    this._id = id;
    this._name = name;
    this._playerType = type;
    this._colorCellOccupied = colorCellOccupied;
    this._colorCellHit = colorCellHit;
    this._colorCellMiss = colorCellMiss;
    this._status = status;
  }
  
  getId() {
    return this._id;
  }

  getName() {
    return this._name;
  }

  getColorCellOccupied() {
    return this._colorCellOccupied;
  }

  getColorCellHit() {
    return this._colorCellHit;
  }

  getColorCellMiss() {
    return this._colorCellMiss;
  }

  getPlayerType(playerType) {
    return this._playerType;
  }

  setPlayerType(playerType) {
    this._playerType = playerType;
  }

  getStatus() {
    return this._status;
  }

  setStatus(status) {
    this._status = status;
  }

  clone() {
    return ( new Player(
      this._id,
      this._name,
      this._type ,
      this._colorCellOccupied,
      this._colorCellHit,
      this._colorCellMiss,
      this._status));
  }

  static defaultPlayers() {
    return [
      new Player(0, 'Program One', 0, '#ff4444','#cc0000', '#ff4444'),
      new Player(1, 'Program Two', 0, '#ffbb33', '#ff8800', '#ffbb33'),
      new Player(2, 'Program Three', 0, '#ccc851', '#007E33', '#ccc851'),
      new Player(3, 'Program Four', 0, '#33b5e5', '#0099cc', '#33b5e5')
    ];
  }

  static externalPlayerTypeIdx = 3; // Oh so dirty...

  static defaultPlayerTypes() {
    return [ 
      { type : 'builtIn', data : '0', description : 'Built in: Stationary, fire only'},
      { type : 'builtIn', data : '1', description : 'Built in: Balance moving and firing'},
      { type : 'builtIn', data : '2', description : 'Built in: Spawn - avoid being killed'}
    ];
  }
}

export default Player;