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
const F = cube => {
  // Line 5, 6, 7, 8
  let newCube = cube
  newCube[5] = 1
}

const permutation = (cube, p1L, p1C, p2L, p2C) => {
  // cube 9*12 matrix
  // pos: (line, column)
  let newCube = cube
  let pos1Value = cube[p1L][p1C]
  let pos2Value = cube[p2L][p2C]
  newCube[p1L][p1C] = pos2Value
  newCube[p2L][p2C] = pos1Value
  return newCube
}

const permutationSeries = (cube, series) => {
  // cube 9*12 matrix
  // series: array of objects 2 pos: {p1L, p1C, p2L, p2C}
  let newCube = cube
  series.forEach(perm => {
    let v1 = newCube[perm.p1L][perm.p1C]
    let v2 = newCube[perm.p2L][perm.p2C]
    newCube[perm.p1L][perm.p1C] = v2
    newCube[perm.p2L][perm.p2C] = v1
  })
  return newCube
}

console.log(cube)
console.log(
  permutationSeries(cube, [
    {
      p1L: 0,
      p1C: 3,
      p2L: 0,
      p2C: 4
    },
    {
      p1L: 0,
      p1C: 3,
      p2L: 0,
      p2C: 4
    }
  ])
)
