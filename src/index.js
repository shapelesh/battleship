import css from './style.css';
import Gameboard from './Board';
import Ship from './Ship';

let gameBoard = Gameboard();

console.log(gameBoard.placeShip({ length: 5 }, 'v', 0, 2));
console.log(gameBoard.placeShip({ length: 5 }, 'v', 5, 5));
gameBoard.attackCell(0, 0);













console.log(setBoardCoordinates(0, 0));

function setBoardCoordinates(x, y) {
  return gameBoard.board[x][y];
}