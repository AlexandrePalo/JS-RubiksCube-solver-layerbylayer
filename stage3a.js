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

const solverStage3a = (cube, consecutiveU = 0) => {
  let stage3CompleteA = false

  // First check if stage3 is needed
  if (isStage3CompleteA(cube)) {
    stage3CompleteA = true
  }

  if (!stage3CompleteA) {
    let colorU = cube[4][10]

    if (
      (cube[4][9] == colorU && cube[4][11] == colorU) ||
      (cube[4][11] == colorU && cube[3][10] == colorU)
    ) {
      // line well oriented or half cross well oriented
      return solverStage3a(s3formulaA(cube))
    } else {
      if (consecutiveU < 3) {
        // U and retry
        return solverStage3a(U(cube), consecutiveU + 1)
      } else {
        console.log(cube)
        console.log('error stage 3a')
      }
    }
  } else {
    console.log('----- STAGE 3a END -----')
    return cube
  }
}

export default solverStage3a

const s3formulaA = cube => {
  console.log("formula a (FRUR'U'F')")
  let newCube = cube.map(arr => arr.slice())
  newCube = Fc(Uc(Rc(U(R(F(cube))))))
  return newCube
}

const isStage3CompleteA = cube => {
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
