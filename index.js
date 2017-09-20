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

/* Basic operations */
// Front F, F'

const clockWiseRotation = (cube, line) => {
  let newCube = cube.map(function(arr) {
    return arr.slice()
  })
  // valid for line = 3, 4, 5 only
  for (let i = 0; i <= 11; i++) {
    if (i < 9) {
      newCube[line][i] = cube[line][i + 3]
    } else {
      newCube[line][i] = cube[line][i - 9]
    }
  }
  return newCube
}

const counterClockWiseRotation = (cube, line) => {
  let newCube = cube.map(function(arr) {
    return arr.slice()
  })
  // valid for line = 3, 4, 5 only
  for (let i = 0; i <= 11; i++) {
    if (i > 2) {
      newCube[line][i] = cube[line][i - 3]
    } else {
      newCube[line][i] = cube[line][i + 9]
    }
  }
  return newCube
}

console.log(clockWiseRotation(cube, 5))
console.log(counterClockWiseRotation(cube, 5))
