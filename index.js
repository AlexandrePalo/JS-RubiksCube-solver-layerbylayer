import { b, w, r, o, y, g } from './colors'
import mixCube from './mix'
import solver from './solver'
import solverStage1a from './stage1a'
import solverStage1b from './stage1b'
import log, { clearLogs } from './logger'
import grapher from './grapher'

// Cube: matrix 9*12
// 19 to 27 is Bottom B
// 46 to 54 is Front F

/*
    0    1   2  3   4   5   6    7  8    9  10   11

0    [00, 00, 00, 01, 02, 03, 00, 00, 00, 00, 00, 00],
1    [00, 00, 00, 04, 05, 06, 00, 00, 00, 00, 00, 00],
2    [00, 00, 00, 07, 08, 09, 00, 00, 00, 00, 00, 00],
3    [10, 11, 12, 19, 20, 21, 28, 29, 30, 37, 38, 39],
4    [13, 14, 15, 22, 23, 24, 31, 32, 33, 40, 41, 42],
5    [16, 17, 18, 25, 26, 27, 34, 35, 36, 43, 44, 45],
6    [00, 00, 00, 46, 47, 48, 00, 00, 00, 00, 00, 00],
7    [00, 00, 00, 49, 50, 51, 00, 00, 00, 00, 00, 00],
8    [00, 00, 00, 52, 53, 54, 00, 00, 00, 00, 00, 00]
*/
/*
    0    1   2  3   4   5   6    7  8    9  10   11

0    [00, 00, 00, 01, 02, 03, 00, 00, 00, 00, 00, 00],
1    [00, 00, 00, 04, B , 06, 00, 00, 00, 00, 00, 00],
2    [00, 00, 00, 07, 08, 09, 00, 00, 00, 00, 00, 00],
3    [10, 11, 12, 19, 20, 21, 28, 29, 30, 37, 38, 39],
4    [13, L , 15, 22, D , 24, 31, R , 33, 40, R , 42],
5    [16, 17, 18, 25, 26, 27, 34, 35, 36, 43, 44, 45],
6    [00, 00, 00, 46, 47, 48, 00, 00, 00, 00, 00, 00],
7    [00, 00, 00, 49, F , 51, 00, 00, 00, 00, 00, 00],
8    [00, 00, 00, 52, 53, 54, 00, 00, 00, 00, 00, 00]
*/

let cubeEndStage1 = [
  [0, 0, 0, g, g, g, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, g, g, b, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, y, o, r, 0, 0, 0, 0, 0, 0],
  [r, o, o, g, b, y, g, y, o, w, w, w],
  [r, r, y, r, y, g, r, o, o, w, w, w],
  [r, g, b, y, b, r, y, o, o, w, w, w],
  [0, 0, 0, o, r, b, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, y, b, y, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, b, b, b, 0, 0, 0, 0, 0, 0]
]

const solvedCube = [
  [0, 0, 0, g, g, g, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, g, g, g, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, g, g, g, 0, 0, 0, 0, 0, 0],
  [o, o, o, w, w, w, r, r, r, y, y, y],
  [o, o, o, w, w, w, r, r, r, y, y, y],
  [o, o, o, w, w, w, r, r, r, y, y, y],
  [0, 0, 0, b, b, b, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, b, b, b, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, b, b, b, 0, 0, 0, 0, 0, 0]
]

/*
let beginCube = mixCube(solvedCube)
clearLogs()
console.log(solver(beginCube))
log()
*/

grapher(100000)
