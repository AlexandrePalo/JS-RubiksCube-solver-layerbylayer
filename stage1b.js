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

const solverStage1b = (cube, consecutiveY = 0) => {
  let stage1bComplete = false

  // First check if stage1b is needed
  if (isStage1bComplete(cube)) {
    stage1bComplete = true
  }

  if (!stage1bComplete) {
    // TODO: add the case where corners at the to are bad placed
    // TODO: a function need to lower them
    // TODO: for instance for the corner FUR: R'D'R

    // BE CAREFUL, center row MUST be aligned with top rows
    // stage1a aligns the row, you need to keep it align in stage1b
    let colorU = cube[4][10]
    let colorF = cube[7][4]
    let colorB = cube[1][4]
    let colorR = cube[4][7]
    let colorL = cube[4][1]
    let colorD = cube[4][4]

    if (cube[8][3] == colorU && cube[5][0] == colorF && cube[5][11] == colorL) {
      return solverStage1b(formulaULCornerULF(cube))
    } else if (
      cube[8][3] == colorU &&
      cube[5][0] == colorR &&
      cube[5][11] == colorF
    ) {
      return solverStage1b(formulaULCornerURF(cube))
    } else if (
      cube[8][3] == colorU &&
      cube[5][0] == colorL &&
      cube[5][11] == colorB
    ) {
      return formulaULCornerULB(cube)
    } else if (
      cube[8][3] == colorU &&
      cube[5][0] == colorB &&
      cube[5][11] == colorR
    ) {
      return solverStage1b(formulaULCornerURB(cube))
    } else if (
      cube[8][5] == colorU &&
      cube[5][9] == colorF &&
      cube[5][8] == colorL
    ) {
      return solverStage1b(formulaURCornerULF(cube))
    } else if (
      cube[8][5] == colorU &&
      cube[5][9] == colorR &&
      cube[5][8] == colorF
    ) {
      return solverStage1b(formulaURCornerURF(cube))
    } else if (
      cube[8][5] == colorU &&
      cube[5][9] == colorL &&
      cube[5][8] == colorB
    ) {
      return solverStage1b(formulaURCornerULB(cube))
    } else if (
      cube[8][5] == colorU &&
      cube[5][9] == colorB &&
      cube[5][8] == colorR
    ) {
      return solverStage1b(formulaURCornerURB(cube))
    } else if (
      cube[6][3] == colorU &&
      cube[5][2] == colorL &&
      cube[5][3] == colorF
    ) {
      return solverStage1b(formulaDLCornerULF(cube))
    } else if (
      cube[6][3] == colorU &&
      cube[5][2] == colorF &&
      cube[5][3] == colorR
    ) {
      return solverStage1b(formulaDLCornerURF(cube))
    } else if (
      cube[6][3] == colorU &&
      cube[5][2] == colorB &&
      cube[5][3] == colorL
    ) {
      return solverStage1b(formulaDLCornerULB(cube))
    } else if (
      cube[6][3] == colorU &&
      cube[5][2] == colorR &&
      cube[5][3] == colorB
    ) {
      return solverStage1b(formulaDLCornerURB(cube))
    } else if (
      cube[6][5] == colorU &&
      cube[5][5] == colorL &&
      cube[5][6] == colorF
    ) {
      return solverStage1b(formulaDRCornerULF(cube))
    } else if (
      cube[6][5] == colorU &&
      cube[5][5] == colorF &&
      cube[5][6] == colorR
    ) {
      return solverStage1b(formulaDRCornerURF(cube))
    } else if (
      cube[6][5] == colorU &&
      cube[5][5] == colorB &&
      cube[5][6] == colorL
    ) {
      return solverStage1b(formulaDRCornerULB(cube))
    } else if (
      cube[6][5] == colorU &&
      cube[5][5] == colorR &&
      cube[5][6] == colorB
    ) {
      return solverStage1b(formulaDRCornerURB(cube))
    } else if (
      cube[5][5] == colorU &&
      cube[6][5] == colorF &&
      cube[5][6] == colorL
    ) {
      return solverStage1b(formulaUnderRCornerULF(cube))
    } else if (
      cube[5][5] == colorU &&
      cube[6][5] == colorR &&
      cube[5][6] == colorF
    ) {
      return solverStage1b(formulaUnderRCornerURF(cube))
    } else if (
      cube[5][5] == colorU &&
      cube[6][5] == colorL &&
      cube[5][6] == colorB
    ) {
      return solverStage1b(formulaUnderRCornerULB(cube))
    } else if (
      cube[5][5] == colorU &&
      cube[6][5] == colorB &&
      cube[5][6] == colorR
    ) {
      return solverStage1b(formulaUnderRCornerURB(cube))
    } else if (
      cube[5][3] == colorU &&
      cube[5][3] == colorF &&
      cube[6][3] == colorL
    ) {
      return solverStage1b(formulaUnderLCornerULF(cube))
    } else if (
      cube[5][3] == colorU &&
      cube[5][3] == colorR &&
      cube[6][3] == colorF
    ) {
      return solverStage1b(formulaUnderLCornerURF(cube))
    } else if (
      cube[5][3] == colorU &&
      cube[5][3] == colorL &&
      cube[6][3] == colorB
    ) {
      return solverStage1b(formulaUnderLCornerULB(cube))
    } else if (
      cube[5][3] == colorU &&
      cube[5][3] == colorB &&
      cube[6][3] == colorR
    ) {
      return solverStage1b(formulaUnderLCornerURB(cube))
    } else {
      return solverStage1b(Y(cube))
    }
  } else {
    console.log(cube)
    console.log('----- STAGE 1B END -----')
    return cube
  }
}

export default solverStage1b

const formulaULCornerULF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula LD'L'DLD'L'")
  newCube = Lc(Dc(L(D(Lc(Dc(L(cube)))))))
  return newCube
}

const formulaULCornerURF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula LDL'D'R'D2RD'R'DR")
  newCube = R(D(Rc(Dc(R(D(D(Rc(Dc(Lc(D(L(cube))))))))))))
  return newCube
}

const formulaULCornerULB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula F'BD'B'F")
  newCube = F(Bc(Dc(B(Fc(cube)))))
  return newCube
}

const formulaULCornerURB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula LDL'BDB'RD'R'")
  newCube = Rc(Dc(R(Bc(D(B(Lc(D(L(cube)))))))))
  return newCube
}

const formulaURCornerULF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula R'DRD'D'F'DF")
  newCube = F(D(Fc(Dc(Dc(R(D(Rc(cube))))))))
  return newCube
}

const formulaURCornerURF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula FD'2F'R'D2R")
  newCube = R(D(D(Rc(Fc(Dc(Dc(F(cube))))))))
  return newCube
}

const formulaURCornerULB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula R'DRDL'DL")
  newCube = L(D(Lc(D(R(D(Rc(cube)))))))
  return newCube
}

const formulaURCornerURB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula R'DRB'DB")
  newCube = B(D(Bc(R(D(Rc(cube))))))
  return newCube
}

const formulaDLCornerULF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula DLD'L'")
  newCube = Lc(Dc(L(D(cube))))
  return newCube
}

const formulaDLCornerURF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula D2FD'F'")
  newCube = Fc(Dc(F(D(D(cube)))))
  return newCube
}

const formulaDLCornerULB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula BD'B'")
  newCube = Bc(Dc(B(cube)))
  return newCube
}

const formulaDLCornerURB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula D'RD'R'")
  newCube = Rc(Dc(R(Dc(cube))))
  return newCube
}

const formulaDRCornerULF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula D'2F'DF")
  newCube = F(D(Fc(Dc(Dc(cube)))))
  return newCube
}

const formulaDRCornerURF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula D'R'DR")
  newCube = R(D(Rc(Dc(cube))))
  return newCube
}

const formulaDRCornerULB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula DL'DL")
  newCube = L(D(Lc(D(cube))))
  return newCube
}

const formulaDRCornerURB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula B'DB")
  newCube = B(D(Bc(cube)))
  return newCube
}

const formulaUnderRCornerULF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula LD'2L'DLD'L'")
  newCube = Lc(Dc(L(D(Lc(Dc(Dc(L(cube))))))))
  return newCube
}

const formulaUnderRCornerURF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula DF'D'FR'DR")
  newCube = R(D(Rc(F(Dc(Fc(D(cube)))))))
  return newCube
}

const formulaUnderRCornerULB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula BDB'DBD'B'")
  newCube = Bc(Dc(B(D(Bc(D(B(cube)))))))
  return newCube
}

const formulaUnderRCornerURB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula LDL'D'R'D2RD'R'DR")
  newCube = R(D(Rc(Dc(R(D(D(Rc(Dc(Lc(D(L(cube))))))))))))
  return newCube
}

const formulaUnderLCornerULF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula DLD'2L'DLD'L'")
  newCube = Lc(Dc(L(D(Lc(Dc(Dc(L(D(cube)))))))))
  return newCube
}

const formulaUnderLCornerURF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula R'D2RD'R'DR")
  newCube = R(D(Rc(Dc(R(D(D(Rc(cube))))))))
  return newCube
}

const formulaUnderLCornerULB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula DL'D'LD'L'DL")
  newCube = L(D(Lc(Dc(L(Dc(Lc(D(cube))))))))
  return newCube
}

const formulaUnderLCornerURB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula B'D'BD'B'DB")
  newCube = B(D(Bc(Dc(B(Dc(Bc(cube)))))))
  return newCube
}

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
