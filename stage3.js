import {
  U,
  Uc,
  L,
  Lc,
  F,
  Fc,
  R,
  Rc,
  B,
  Bc,
  D,
  Dc,
  Y,
  Yc,
  X
} from './transformations'

const solverStage3 = cube => {
  let stage3Complete = false

  // First check if stage3 is needed
  if (isStage3Complete(cube)) {
    stage3Complete = true
  }

  if (!stage3Complete) {
  } else {
    console.log('----- STAGE 3 END -----')
    return cube
  }
}

export default solverStage3

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

const s3formula = cube => {
  let newCube = cube.map(arr => arr.slice())
  newCube = F(D(Fc(Dc(Lc(Dc(L(D(cube))))))))
  return newCube
}

const isStage3Complete = cube => {
  // U completed
  let colorU = cube[4][10]
  let Ucompleted = false
  if (
    cube[3][9] == colorU &&
    cube[3][10] == colorU &&
    cube[3][11] == colorU &&
    cube[4][9] == colorU &&
    cube[4][11] == colorU &&
    cube[5][9] == colorU &&
    cube[5][10] == colorU &&
    cube[5][11] == colorU
  ) {
    Ucompleted = true
  }

  // First & second rows of L, R, F, & B completed
  let colorL = cube[4][1]
  let firstAndSecondRowsLcompleted = false
  if (
    cube[3][0] == colorL &&
    cube[4][0] == colorL &&
    cube[5][0] == colorL &&
    cube[3][1] == colorL &&
    cube[5][1] == colorL
  ) {
    firstAndSecondRowsLcompleted = true
  }

  let colorR = cube[4][7]
  let firstAndSecondRowsRcompleted = false
  if (
    cube[3][8] == colorR &&
    cube[4][8] == colorR &&
    cube[5][8] == colorR &&
    cube[3][7] == colorR &&
    cube[5][7] == colorR
  ) {
    firstAndSecondRowsRcompleted = true
  }

  let colorF = cube[7][4]
  let firstAndSecondRowsFcompleted = false
  if (
    cube[8][3] == colorF &&
    cube[8][4] == colorF &&
    cube[8][5] == colorF &&
    cube[7][3] == colorF &&
    cube[7][5] == colorF
  ) {
    firstAndSecondRowsFcompleted = true
  }
  let colorB = cube[1][4]
  let firstAndSecondRowsBcompleted = false
  if (
    cube[0][3] == colorB &&
    cube[0][4] == colorB &&
    cube[0][5] == colorB &&
    cube[1][3] == colorB &&
    cube[1][5] == colorB
  ) {
    firstAndSecondRowsBcompleted = true
  }

  // cross D completed
  let colorD = cube[4][4]
  let crossDcompleted = false
  if (
    cube[3][4] == colorD &&
    cube[4][3] == colorD &&
    cube[4][5] == colorD &&
    cube[5][4] == colorD
  ) {
    crossDcompleted = true
  }

  if (
    Ucompleted &&
    firstAndSecondRowsLcompleted &&
    firstAndSecondRowsRcompleted &&
    firstAndSecondRowsFcompleted &&
    firstAndSecondRowsBcompleted &&
    crossDcompleted
  ) {
    return true
  }

  return false
}
