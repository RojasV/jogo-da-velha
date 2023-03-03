const cells = document.querySelectorAll('.cell');
let xIsNext = true;

for (const cell of cells) {
  cell.addEventListener('click', handleClick);
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = xIsNext ? 'x' : 'o';
  cell.textContent = currentClass;
  
  let winner = checkForWinner();
  if (winner) {
    alert(`O jogador ${winner.toUpperCase()} venceu!`);
    cells.forEach(item => {
      item.textContent = ""
    })
    return;
  }
  
  xIsNext = !xIsNext;
}

function checkForWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (cells[a].textContent === cells[b].textContent &&
        cells[b].textContent === cells[c].textContent &&
        cells[a].textContent !== '') {
      return cells[a].textContent;
    }
  }
  
  return '';
}
