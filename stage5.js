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

const solverStage5 = (cube, consecutiveY = 0, consecutiveFormula = 0) => {
  let stage5Complete = false

  // First check if stage5 is needed
  if (isStage5Complete(cube)) {
    stage5Complete = true
  }

  if (!stage5Complete) {
    // One well placed and oriented corners and FUL
    // But the corner FUR is NOT
    if (
      cube[5][0] == cube[4][1] &&
      cube[8][3] == cube[7][4] &&
      cube[5][11] == cube[4][10] &&
      (cube[8][5] != cube[7][4] ||
        cube[5][8] != cube[4][7] ||
        cube[5][9] != cube[4][10])
    ) {
      return solverStage5(s5formula(cube))
    } else {
      if (consecutiveY < 3) {
        return solverStage5(Y(cube), consecutiveY + 1)
      } else {
        if (consecutiveFormula < 3) {
          return solverStage5(s5formula(cube), 0, consecutiveFormula + 1)
        } else {
          //console.log(cube)
          //console.log('error stage 5')
        }
      }
    }
  } else {
    //console.log('----- STAGE 5 END -----')
    return cube
  }
}

export default solverStage5

const s5formula = cube => {
  //console.log("formula (RU2R'U'RU'R'L'U2LUL'UL)")
  let newCube = cube.map(arr => arr.slice())
  newCube = L(U(Lc(U(L(U(U(Lc(Rc(Uc(R(Uc(Rc(U(U(R(cube))))))))))))))))
  return newCube
}

const isStage5Complete = cube => {
  // Completed cube

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

  // F completed
  let colorF = cube[7][4]
  let Fcompleted = false
  if (
    cube[6][3] == colorF &&
    cube[6][4] == colorF &&
    cube[6][5] == colorF &&
    cube[7][3] == colorF &&
    cube[7][5] == colorF &&
    cube[8][3] == colorF &&
    cube[8][4] == colorF &&
    cube[8][5] == colorF
  ) {
    Fcompleted = true
  }

  // B completed
  let colorB = cube[1][4]
  let Bcompleted = false
  if (
    cube[0][3] == colorB &&
    cube[0][4] == colorB &&
    cube[0][5] == colorB &&
    cube[1][3] == colorB &&
    cube[1][5] == colorB &&
    cube[2][3] == colorB &&
    cube[2][4] == colorB &&
    cube[2][5] == colorB
  ) {
    Bcompleted = true
  }

  // L completed
  let colorL = cube[4][1]
  let Lcompleted = false
  if (
    cube[3][0] == colorL &&
    cube[3][1] == colorL &&
    cube[3][2] == colorL &&
    cube[4][0] == colorL &&
    cube[4][2] == colorL &&
    cube[5][0] == colorL &&
    cube[5][1] == colorL &&
    cube[5][2] == colorL
  ) {
    Lcompleted = true
  }

  // R completed
  let colorR = cube[4][7]
  let Rcompleted = false
  if (
    cube[3][6] == colorR &&
    cube[3][7] == colorR &&
    cube[3][8] == colorR &&
    cube[4][6] == colorR &&
    cube[4][8] == colorR &&
    cube[5][6] == colorR &&
    cube[5][7] == colorR &&
    cube[5][8] == colorR
  ) {
    Rcompleted = true
  }

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

  if (
    Dcompleted &&
    Fcompleted &&
    Bcompleted &&
    Lcompleted &&
    Rcompleted &&
    Ucompleted
  ) {
    return true
  }
  return false
}
