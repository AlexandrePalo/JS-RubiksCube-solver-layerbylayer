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

const solverStage1b = (cube, consecutiveD = 0, consecutiveY = 0) => {
  let stage1bComplete = false

  // First check if stage1b is needed
  if (isStage1bComplete(cube)) {
    stage1bComplete = true
  }

  if (!stage1bComplete) {
    // 3 Y max to find on last row
    if (
      cube[6][5] == cube[7][4] &&
      cube[5][6] == cube[4][10] &&
      cube[5][5] == cube[4][7]
    ) {
      console.log("R'D'R")
      return solverStage1b(R(Dc(Rc(cube))))
    } else if (
      cube[6][5] == cube[4][10] &&
      cube[5][6] == cube[4][7] &&
      cube[5][5] == cube[4][1]
    ) {
      console.log("D'R'DR")
      return solverStage1b(R(D(Rc(Dc(cube)))))
    } else if (
      cube[5][5] == cube[4][10] &&
      cube[6][5] == cube[4][7] &&
      cube[5][6] == cube[7][4]
    ) {
      console.log("R'D2RDR'D'R")
      return solverStage1b(R(Dc(Rc(D(R(D(D(Rc(cube)))))))))
    } else if (cube[8][5] == cube[4][10]) {
      console.log("R'D'R")
      return solverStage1b(R(Dc(Rc(cube))))
    } else if (cube[8][3] == cube[4][10]) {
      console.log("LDL'")
      return solverStage1b(Lc(D(L(cube))))
    } else {
      if (consecutiveY < 3) {
        if (consecutiveD < 3) {
          console.log('D')
          return solverStage1b(D(cube), consecutiveD + 1, consecutiveY)
        } else {
          console.log('Y')
          return solverStage1b(Y(cube), 0, consecutiveY + 1)
        }
      } else {
        console.log('UNRECOGNIZED ARRAY')
      }
    }
  } else {
    console.log('----- STAGE 1B END -----')
    return cube
  }
}

export default solverStage1b

const isStage1bComplete = cube => {
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

  // First row of L, R, F, & B completed and centers aligned
  let colorL = cube[4][1]
  let firstRowLcompleted = false
  if (cube[3][0] == colorL && cube[4][0] == colorL && cube[5][0] == colorL) {
    firstRowLcompleted = true
  }

  let colorR = cube[4][7]
  let firstRowRcompleted = false
  if (cube[3][8] == colorR && cube[4][8] == colorR && cube[5][8] == colorR) {
    firstRowRcompleted = true
  }

  let colorF = cube[7][4]
  let firstRowFcompleted = false
  if (cube[8][3] == colorF && cube[8][4] == colorF && cube[8][5] == colorF) {
    firstRowFcompleted = true
  }
  let colorB = cube[1][4]
  let firstRowBcompleted = false
  if (cube[0][3] == colorB && cube[0][4] == colorB && cube[0][5] == colorB) {
    firstRowBcompleted = true
  }

  if (Ucompleted) {
    return true
  }
  return false
}
