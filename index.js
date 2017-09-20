// Cube: matrix 9*12
// 19 to 27 is Bottom B
// 46 to 54 is Front F
let cube = [
  [0, 0, 0, 1, 2, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 4, 5, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 7, 8, 9, 0, 0, 0, 0, 0, 0],
  [10, 11, 12, 19, 20, 21, 28, 29, 30, 37, 38, 39],
  [13, 14, 15, 22, 23, 24, 31, 32, 33, 40, 41, 42],
  [16, 17, 18, 25, 26, 27, 34, 35, 36, 43, 44, 45],
  [0, 0, 0, 46, 47, 48, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 49, 50, 51, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 52, 53, 54, 0, 0, 0, 0, 0, 0]
]

const lineClockWiseRotation = (cube, line) => {
  // Rotate line 3, 4 or 5

  let newCube = cube.map(function(arr) {
    return arr.slice()
  })

  if (line === 3 || line === 4 || line === 5) {
    for (let i = 0; i <= 11; i++) {
      if (i < 9) {
        newCube[line][i] = cube[line][i + 3]
      } else {
        newCube[line][i] = cube[line][i - 9]
      }
    }
  }

  if (line === 3) {
    newCube[2][3] = cube[0][3]
    newCube[1][3] = cube[0][4]
    newCube[0][3] = cube[0][5]
    newCube[2][4] = cube[1][3]
    newCube[1][4] = cube[1][4]
    newCube[0][4] = cube[1][5]
    newCube[2][5] = cube[2][3]
    newCube[1][5] = cube[2][4]
    newCube[0][5] = cube[2][5]
  }

  if (line === 5) {
    newCube[8][3] = cube[6][3]
    newCube[7][3] = cube[6][4]
    newCube[6][3] = cube[6][5]
    newCube[8][4] = cube[7][3]
    newCube[7][4] = cube[7][4]
    newCube[6][4] = cube[7][5]
    newCube[8][5] = cube[8][3]
    newCube[7][5] = cube[8][4]
    newCube[6][5] = cube[8][5]
  }

  return newCube
}

const lineCounterClockWiseRotation = (cube, line) => {
  // Rotate line 3, 4 or 5

  let newCube = cube.map(function(arr) {
    return arr.slice()
  })

  if (line === 3 || line === 4 || line === 5) {
    for (let i = 0; i <= 11; i++) {
      if (i > 2) {
        newCube[line][i] = cube[line][i - 3]
      } else {
        newCube[line][i] = cube[line][i + 9]
      }
    }
  }

  if (line === 3) {
    newCube[0][5] = cube[0][3]
    newCube[1][5] = cube[0][4]
    newCube[2][5] = cube[0][5]
    newCube[0][4] = cube[1][3]
    newCube[1][4] = cube[1][4]
    newCube[2][4] = cube[1][5]
    newCube[0][3] = cube[2][3]
    newCube[1][3] = cube[2][4]
    newCube[2][3] = cube[2][5]
  }

  if (line === 5) {
    newCube[6][5] = cube[6][3]
    newCube[7][5] = cube[6][4]
    newCube[8][5] = cube[6][5]
    newCube[6][4] = cube[7][3]
    newCube[7][4] = cube[7][4]
    newCube[8][4] = cube[7][5]
    newCube[6][3] = cube[8][3]
    newCube[7][3] = cube[8][4]
    newCube[8][3] = cube[8][5]
  }

  return newCube
}

const columnClockWiseRotation = (cube, column) => {
  // Rotate column 3, 4 or 5

  let newCube = cube.map(function(arr) {
    return arr.slice()
  })
  let fakeLine = []
  let newFakeLine = []

  // real column
  for (let j = 0; j <= 8; j++) {
    fakeLine.push(cube[j][column])
  }
  // add upper face by reverting the corresponding matrix
  for (let j = 3; j <= 5; j++) {
    fakeLine.push(cube[j][11 - column + 3])
  }

  // move fake line
  if (column === 3 || column === 4 || column === 5) {
    for (let i = 0; i <= 11; i++) {
      if (i < 9) {
        newFakeLine[i] = fakeLine[i + 3]
      } else {
        newFakeLine[i] = fakeLine[i - 9]
      }
    }
  }

  // rebuild cube with fake line
  for (let j = 0; j <= 8; j++) {
    newCube[j][column] = newFakeLine[j]
  }
  for (let j = 3; j <= 5; j++) {
    newCube[j][11 - column + 3] = newFakeLine[6 + j]
  }

  if (column === 3) {
    newCube[5][0] = cube[3][0]
    newCube[4][0] = cube[3][1]
    newCube[3][0] = cube[3][2]
    newCube[5][1] = cube[4][0]
    newCube[4][1] = cube[4][1]
    newCube[3][1] = cube[4][2]
    newCube[5][2] = cube[5][0]
    newCube[4][2] = cube[5][1]
    newCube[3][2] = cube[5][2]
  }

  if (column === 5) {
    newCube[5][6] = cube[3][6]
    newCube[4][6] = cube[3][7]
    newCube[3][6] = cube[3][8]
    newCube[5][7] = cube[4][6]
    newCube[4][7] = cube[4][7]
    newCube[3][7] = cube[4][8]
    newCube[5][8] = cube[5][6]
    newCube[4][8] = cube[5][7]
    newCube[3][8] = cube[5][8]
  }

  return newCube
}

const columnCounterClockWiseRotation = (cube, column) => {
  // Rotate column 3, 4 or 5

  let newCube = cube.map(function(arr) {
    return arr.slice()
  })
  let fakeLine = []
  let newFakeLine = []

  // real column
  for (let j = 0; j <= 8; j++) {
    fakeLine.push(cube[j][column])
  }
  // add upper face by reverting the corresponding matrix
  for (let j = 3; j <= 5; j++) {
    fakeLine.push(cube[j][11 - column + 3])
  }

  // move fake line
  if (column === 3 || column === 4 || column === 5) {
    for (let i = 0; i <= 11; i++) {
      if (i > 2) {
        newFakeLine[i] = fakeLine[i - 3]
      } else {
        newFakeLine[i] = fakeLine[i + 9]
      }
    }
  }

  // rebuild cube with fake line
  for (let j = 0; j <= 8; j++) {
    newCube[j][column] = newFakeLine[j]
  }
  for (let j = 3; j <= 5; j++) {
    newCube[j][11 - column + 3] = newFakeLine[6 + j]
  }

  if (column === 3) {
    newCube[3][2] = cube[3][0]
    newCube[4][2] = cube[3][1]
    newCube[5][2] = cube[3][2]
    newCube[3][1] = cube[4][0]
    newCube[4][1] = cube[4][1]
    newCube[5][1] = cube[4][2]
    newCube[3][0] = cube[5][0]
    newCube[4][0] = cube[5][1]
    newCube[5][0] = cube[5][2]
  }

  if (column === 5) {
    newCube[3][8] = cube[3][6]
    newCube[4][8] = cube[3][7]
    newCube[5][8] = cube[3][8]
    newCube[3][7] = cube[4][6]
    newCube[4][7] = cube[4][7]
    newCube[5][7] = cube[4][8]
    newCube[3][6] = cube[5][6]
    newCube[4][6] = cube[5][7]
    newCube[5][6] = cube[5][8]
  }

  return newCube
}

console.log(cube)
