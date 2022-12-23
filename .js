function superPuzzle(arr) {
  let moves = [];
  let emptyRow, emptyCol;

  // find position of empty tile
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        emptyRow = i;
        emptyCol = j;
        break;
      }
    }
  }

  // iterate over the array and make moves
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // check if tile is in correct position
      if (arr[i][j] !== i * arr.length + j + 1) {
        // check if empty tile is in a position to slide the tile
        if (emptyRow === i && (emptyCol === j - 1 || emptyCol === j + 1)) {
          moves.push(arr[i][j]);
          emptyRow = i;
          emptyCol = j;
        } else if (emptyCol === j && (emptyRow === i - 1 || emptyRow === i + 1)) {
          moves.push(arr[i][j]);
          emptyRow = i;
          emptyCol = j;
        }
      }
    }
  }

  return moves;
}
let simpleExample = [    [ 1, 2, 3, 4],
    [ 5, 0, 6, 8],
    [ 9,10, 7,11],
    [13,14,15,12]
];

console.log(superPuzzle(simpleExample)); // [6,7,11,12]