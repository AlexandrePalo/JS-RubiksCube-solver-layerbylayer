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

const solverStage3b = cube => {
  let stage3CompleteB = false

  // First check if stage3 is needed
  if (isStage3CompleteB(cube)) {
    stage3CompleteB = true
  }

  if (!stage3CompleteB) {
    let edgeLOK = cube[4][0] == cube[4][1]
    let edgeROK = cube[4][8] == cube[4][7]
    let edgeFOK = cube[8][4] == cube[7][4]
    let edgeBOK = cube[0][4] == cube[1][4]

    if ((edgeROK && edgeBOK) || (edgeBOK && edgeFOK) || (edgeLOK && edgeROK)) {
      // Edge R and Edge B well oriented
      // Or 2 well oriented edges face each others
      return solverStage3b(s3formulaB(cube))
    } else if (
      (edgeFOK && edgeROK) ||
      (edgeFOK && edgeLOK) ||
      (edgeBOK && edgeLOK)
    ) {
      return solverStage3b(Y(cube))
    } else {
      return solverStage3b(U(cube))
    }
  } else {
    //console.log('----- STAGE 3b END -----')
    return cube
  }
}

export default solverStage3b

const s3formulaB = cube => {
  //console.log("formula b (RUR'URU2R)")
  let newCube = cube.map(arr => arr.slice())
  newCube = Rc(U(U(R(U(Rc(U(R(cube))))))))
  return newCube
}

const isStage3CompleteB = cube => {
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

  // U edges well oriented
  let UEdgesWellOriented = false
  if (
    cube[4][0] == cube[4][1] &&
    cube[4][8] == cube[4][7] &&
    cube[8][4] == cube[7][4] &&
    cube[0][4] == cube[1][4]
  ) {
    UEdgesWellOriented = true
  }

  if (
    Dcompleted &&
    firstAndSecondRowsLcompleted &&
    firstAndSecondRowsRcompleted &&
    firstAndSecondRowsFcompleted &&
    firstAndSecondRowsBcompleted &&
    crossUcompleted &&
    UEdgesWellOriented
  ) {
    return true
  }

  return false
}
