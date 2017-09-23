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

const solverStage2 = (cube, consecutiveD = 0) => {
  let stage2Complete = false

  // First check if stage2 is needed
  if (isStage2Complete(cube)) {
    stage2Complete = true
  }

  if (!stage2Complete) {
    // Check if formula is needed on F
    if (cube[6][4] == cube[7][4] && cube[5][4] != cube[4][4]) {
      // The cube need to be moved to L or R
      if (cube[5][4] == cube[4][1]) {
        // Formula L
        console.log('formula L')
        return solverStage2(s2formulaL(cube))
      }
      if (cube[5][4] == cube[4][7]) {
        // Formula R
        console.log('formula R')
        return solverStage2(s2formulaR(cube))
      }
    } else {
      // The cube doesn't belong to the face F or is already well placed (regarding F and D)
      // Check if edges are placed but no in the right order
      if (cube[7][3] == cube[4][1] && cube[5][1] == cube[7][4]) {
        // Move it with L formula
        console.log('wrong order L')
        console.log('formula L')
        return solverStage2(s2formulaL(cube))
      }
      if (cube[7][5] == cube[4][7] && cube[5][7] == cube[7][4]) {
        // Move it with R formula
        console.log('wrong order R')
        console.log('formula R')
        return solverStage2(s2formulaR(cube))
      }

      // Check if all D edges are the color of U
      let colorU = cube[4][4]
      if (
        cube[4][2] == colorU &&
        cube[2][4] == colorU &&
        cube[4][6] == colorU &&
        cube[6][4] == colorU
      ) {
        // R or L formula whatever F is
        console.log('all U edges color')
        console.log('formula R')
        return solverStage2(s2formulaR(cube))
      }

      if (consecutiveD < 3) {
        // D
        console.log('D')
        return solverStage2(D(cube), consecutiveD + 1)
      } else {
        // Already 3 D
        // --> Y
        console.log('Y')
        return solverStage2(Y(cube))
      }
    }
  } else {
    console.log('----- STAGE 2 END -----')
    // X2 needed for stage 3 and further
    console.log('X2')
    cube = X(X(cube))
    return cube
  }
}

export default solverStage2

const s2formulaL = cube => {
  let newCube = cube.map(arr => arr.slice())
  newCube = F(D(Fc(Dc(Lc(Dc(L(D(cube))))))))
  return newCube
}

const s2formulaR = cube => {
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
