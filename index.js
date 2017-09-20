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

console.log(cube)
console.log(lineClockWiseRotation(cube, 3))
