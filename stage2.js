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
import { startTimer, stopTimer, setLogsStageFromBuffer } from './logger'

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

const solverStage2 = (
  cube,
  consecutiveD = 0,
  consecutiveY = 0,
  consecutiveYbis = 0
) => {
  let stage2Complete = false

  // First check if stage2 is needed
  if (isStage2Complete(cube)) {
    stage2Complete = true
  }

  if (!stage2Complete) {
    //console.log(cube)
    let colorU = cube[4][10]
    // Check if formula is needed on F, with R or L formula
    if (
      cube[6][4] == cube[7][4] &&
      cube[5][4] != cube[4][4] &&
      cube[5][4] == cube[4][1]
    ) {
      // The cube need to be moved to L or R
      // Formula L
      return solverStage2(s2formulaL(cube))
    } else if (
      cube[6][4] == cube[7][4] &&
      cube[5][4] != cube[4][4] &&
      cube[5][4] == cube[4][7]
    ) {
      // The cube need to be moved to L or R
      // Formula R
      return solverStage2(s2formulaR(cube))
    } else {
      if (consecutiveD < 3) {
        return solverStage2(D(cube), consecutiveD + 1, consecutiveY)
      } else {
        if (consecutiveY < 3) {
          return solverStage2(Y(cube), 0, consecutiveY + 1)
        } else {
          // Second phase to check wrongly placed edges
          if (consecutiveYbis < 3) {
            if (cube[7][3] != cube[7][4] || cube[5][1] != cube[4][1]) {
              return solverStage2(s2formulaL(cube))
            } else if (cube[7][4] != cube[7][5] && cube[5][7] != cube[4][7]) {
              return solverStage2(s2formulaR(cube))
            } else {
              return solverStage2(
                Y(cube),
                consecutiveY,
                consecutiveD,
                consecutiveYbis + 1
              )
            }
          } else {
            // Unreached case
            throw new Error('not end stage2')
          }
        }
      }
    }
  } else {
    //console.log('----- STAGE 2 END -----')
    // X2 needed for stage 3 and further
    stopTimer('stage2')
    setLogsStageFromBuffer('stage2')
    startTimer()
    cube = X(X(cube))
    return cube
  }
}

export default solverStage2

const s2formulaL = cube => {
  //console.log("formula L (DLD'L'D'F'DF)")
  let newCube = cube.map(arr => arr.slice())
  newCube = F(D(Fc(Dc(Lc(Dc(L(D(cube))))))))
  return newCube
}

const s2formulaR = cube => {
  //console.log("formula R (D'R'DRDFD'F')")
  let newCube = cube.map(arr => arr.slice())
  newCube = Fc(Dc(F(D(R(D(Rc(Dc(cube))))))))
  return newCube
}

const isStage2Complete = cube => {
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

  if (
    Ucompleted &&
    firstAndSecondRowsLcompleted &&
    firstAndSecondRowsRcompleted &&
    firstAndSecondRowsFcompleted &&
    firstAndSecondRowsBcompleted
  ) {
    return true
  }
  return false
}

/*
else if (
  cube[7][3] == cube[4][7] &&
  cube[5][1] == cube[7][4] &&
  cube[7][5] == cube[4][7] &&
  cube[5][7] == cube[7][4]
) {
  // Blocked case 1
  // Two blocks 7,3 & 7,5 must be permuted
  // Formula R and retry
  return solverStage2(s2formulaR(cube))
} else if (
  cube[7][3] == cube[7][4] &&
  cube[5][1] == cube[4][7] &&
  cube[7][5] == cube[7][4] &&
  cube[5][7] == cube[4][1]
) {
  // Blocked case 2
  // Two blocks 7,3 & 7,5 must be permuted in the other way
  // Formula R and retry
  return solverStage2(s2formulaR(cube))
} else if (
  cube[7][3] == cube[4][7] &&
  cube[5][1] == cube[7][4] &&
  cube[7][5] == cube[7][4] &&
  cube[5][7] == cube[4][1]
) {
  // Blocked case 3
  // Two blocks 7,3 & 7,5 must be permuted in the other way
  // Formula R and retry
  return solverStage2(s2formulaL(cube))
}



else if (cube[7][3] == cube[4][1] && cube[5][1] == cube[7][4]) {
  // Placed but bad oriented
  // Down it with L formula
  return solverStage2(s2formulaL(cube))
} else if (cube[7][5] == cube[4][7] && cube[5][7] == cube[7][4]) {
  // Placed but bad oriented
  // Down it with R formula
  return solverStage2(s2formulaR(cube))
}



if (cube[5][1] == cube[7][4] && cube[7][3] == cube[4][1]) {
  return solverStage2(s2formulaL(cube))
} else if (cube[7][5] == cube[4][7] && cube[5][7] == cube[7][4]) {
  return solverStage2(s2formulaR(cube))
}
*/
