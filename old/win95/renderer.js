const WIDTH = 9
const HEIGHT = 9
const BOMB_N = 10
const CELL_BOMB = -1;

let board = document.getElementById('board');
let backBoard = []

function setBomb(pos) {
  let id = 'cell' + pos
  let cell = document.getElementById(id);
  cell.classList.add('bomb')
}

function setBombs(n) {
  for (let i = 0; i < n; i++) {
    let id = Math.floor(Math.random() * WIDTH * HEIGHT);
    const element = array[i];
  }

}

function apply(params) {

}

backBoard = new Array(HEIGHT)

for (let i = 0; i < WIDTH; i++) {
  backBoard[i] = new Array(WIDTH).fill(0)
}

function createBoard() {
  for (let i = 0; i < HEIGHT; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < WIDTH; j++) {
      let td = document.createElement('td');
      let cell = document.createElement('button');
      let index = i * WIDTH + j
      cell.setAttribute('id', 'cell' + index)
      cell.classList.add('front')
      cell.classList.add('cell')
      cell.classList.add('border-2px')
      //cell.classList.add('closed')
      cell.innerHTML = 1
      td.appendChild(cell)
      tr.appendChild(td)
    }
    board.appendChild(tr)
  }
}

createBoard()