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
    let colorU = cube[4][10]

    if (
      (cube[4][9] == colorU && cube[4][11] == colorU) ||
      (cube[4][11] == colorU && cube[3][10] == colorU)
    ) {
      // line well oriented or half cross well oriented
      console.log('formula')
      return solverStage3(s3formula(cube))
    } else {
      // U and retry
      console.log('U')
      return solverStage3(U(cube))
    }
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
  newCube = Fc(Uc(Rc(U(R(F(cube))))))
  return newCube
}

const isStage3Complete = cube => {
  // Be careful, the cube was returned with X2

  // D completed
  let colorD = cube[4][4]
  let Dcompleted = false
  if (
    cube[3][3] == colorD &&
    cube[3][4] == colorD &&
    cube[3][5] == colorD &&
    cube[4][3] == colorD &&
    cube[4][5] == colorD &&
    cube[5][3] == colorD &&
    cube[5][4] == colorD &&
    cube[5][5] == colorD
  ) {
    Dcompleted = true
  }

  // First & second rows of L, R, F, & B completed
  let colorL = cube[4][1]
  let firstAndSecondRowsLcompleted = false
  if (
    cube[3][2] == colorL &&
    cube[4][2] == colorL &&
    cube[5][2] == colorL &&
    cube[3][1] == colorL &&
    cube[5][1] == colorL
  ) {
    firstAndSecondRowsLcompleted = true
  }

  let colorR = cube[4][7]
  let firstAndSecondRowsRcompleted = false
  if (
    cube[3][6] == colorR &&
    cube[4][6] == colorR &&
    cube[5][6] == colorR &&
    cube[3][7] == colorR &&
    cube[5][7] == colorR
  ) {
    firstAndSecondRowsRcompleted = true
  }

  let colorF = cube[7][4]
  let firstAndSecondRowsFcompleted = false
  if (
    cube[6][3] == colorF &&
    cube[6][4] == colorF &&
    cube[6][5] == colorF &&
    cube[7][3] == colorF &&
    cube[7][5] == colorF
  ) {
    firstAndSecondRowsFcompleted = true
  }
  let colorB = cube[1][4]
  let firstAndSecondRowsBcompleted = false
  if (
    cube[2][3] == colorB &&
    cube[2][4] == colorB &&
    cube[2][5] == colorB &&
    cube[1][3] == colorB &&
    cube[1][5] == colorB
  ) {
    firstAndSecondRowsBcompleted = true
  }

  // cross U completed
  let colorU = cube[4][10]
  let crossUcompleted = false
  if (
    cube[4][9] == colorU &&
    cube[4][11] == colorU &&
    cube[3][10] == colorU &&
    cube[5][10] == colorU
  ) {
    crossUcompleted = true
  }

  if (
    Dcompleted &&
    firstAndSecondRowsLcompleted &&
    firstAndSecondRowsRcompleted &&
    firstAndSecondRowsFcompleted &&
    firstAndSecondRowsBcompleted &&
    crossUcompleted
  ) {
    return true
  }

  return false
}
