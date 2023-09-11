class Cell {
  constructor(x, y) {
    this.ship = null;
    this.taken = false;
    this.attacked = false;
    this.position = {
      x: x,
      y: y,
    }
  }

  setShip = (ship) => {
    this.ship = ship;
    this.taken = true;
  }

  setAttacked = () => {
    this.attacked = true;
  }
}

export default function Gameboard() {
  const buildBoard = (() => {
    let board = [];
    for (let x = 0; x <= 9; x++) {
      let row = [];
      for (let y = 0; y <= 9; y++) {
        row.push(new Cell(x, y));
      }
      board.push(row);
    }
    return board;

  })()

  const placeShip = (ship, direction, x, y) => {

    if (!isCellEmpty(buildBoard, x, y)) {
      return false;
    }
    if (!areNextCellsViable(buildBoard, direction, x, y, ship.length)) {
      return false;
    }
    buildBoard[x][y].setShip(ship)

    // TODO: Remove the next return statement;
    return 'ship placed';
  }
  const attackCell = (x, y) => {
    buildBoard[x][y].setAttacked()
  }

  return {
    board: buildBoard,
    placeShip,
    attackCell,
  }
}

function isCellEmpty(board, x, y) {
  if (board[x][y].taken == true) {
    return false;
  } else {
    return true;
  }
}

function areNextCellsViable(board, direction, x, y, shipLength) {
  let _areEmpty = [];
  if (direction == 'h') {
    if (x + shipLength > board.length - 1) {
      return false;
    }
    for (let i = x; i < shipLength; i++) {
      _areEmpty.push(isCellEmpty(board, i, y))
    }
  } else if (direction == 'v') {
    if (y + shipLength > board.length - 1) {
      return false;
    }
    for (let i = y; i < y + shipLength; i++) {
      _areEmpty.push(isCellEmpty(board, x, i))
    }
  }
  if (_areEmpty.includes(false)) {
    return false;
  } else {
    return true;
  }
}