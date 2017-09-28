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
import { arrayClone } from './utils'

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

const solverStage1a = (cube, consecutiveY = 0) => {
  let stage1aComplete = false

  // First check if stage1a is needed
  if (isStage1aComplete(cube)) {
    stage1aComplete = true
  }

  if (!stage1aComplete) {
    // BE CAREFUL, center row MUST be aligned with top rows

    let colorU = cube[4][10]
    let colorF = cube[7][4]
    let colorB = cube[1][4]
    let colorR = cube[4][7]
    let colorL = cube[4][1]
    let colorD = cube[4][4]

    if (cube[8][4] == colorU && cube[5][10] == colorL) {
      return solverStage1a(formulaUEdgeUL(cube))
    } else if (cube[8][4] == colorU && cube[5][10] == colorR) {
      return solverStage1a(formulaUEdgeUR(cube))
    } else if (cube[8][4] == colorU && cube[5][10] == colorB) {
      return solverStage1a(formulaUEdgeUB(cube))
    } else if (cube[8][4] == colorU && cube[5][10] == colorF) {
      return solverStage1a(formulaUEdgeUF(cube))
    } else if (cube[7][5] == colorU && cube[5][7] == colorL) {
      return solverStage1a(formulaREdgeUL(cube))
    } else if (cube[7][5] == colorU && cube[5][7] == colorR) {
      return solverStage1a(formulaREdgeUR(cube))
    } else if (cube[7][5] == colorU && cube[5][7] == colorB) {
      return solverStage1a(formulaREdgeUB(cube))
    } else if (cube[7][5] == colorU && cube[5][7] == colorF) {
      return solverStage1a(formulaREdgeUF(cube))
    } else if (cube[6][4] == colorU && cube[5][4] == colorL) {
      return solverStage1a(formulaDEdgeUL(cube))
    } else if (cube[6][4] == colorU && cube[5][4] == colorR) {
      return solverStage1a(formulaDEdgeUR(cube))
    } else if (cube[6][4] == colorU && cube[5][4] == colorB) {
      return solverStage1a(formulaDEdgeUB(cube))
    } else if (cube[6][4] == colorU && cube[5][4] == colorF) {
      return solverStage1a(formulaDEdgeUF(cube))
    } else if (cube[7][3] == colorU && cube[5][1] == colorL) {
      return solverStage1a(formulaLEdgeUL(cube))
    } else if (cube[7][3] == colorU && cube[5][1] == colorR) {
      return solverStage1a(formulaLEdgeUR(cube))
    } else if (cube[7][3] == colorU && cube[5][1] == colorB) {
      return solverStage1a(formulaLEdgeUB(cube))
    } else if (cube[7][3] == colorU && cube[5][1] == colorF) {
      return solverStage1a(formulaLEdgeUF(cube))
    } else if (cube[5][3] == colorU && cube[6][4] == colorL) {
      return solverStage1a(formulaUnderDEdgeUL(cube))
    } else if (cube[5][3] == colorU && cube[6][4] == colorR) {
      return solverStage1a(formulaUnderDEdgeUR(cube))
    } else if (cube[5][3] == colorU && cube[6][4] == colorB) {
      return solverStage1a(formulaUnderDEdgeUB(cube))
    } else if (cube[5][3] == colorU && cube[6][4] == colorF) {
      return solverStage1a(formulaUnderDEdgeUF(cube))
    } else {
      return solverStage1a(Y(cube))
    }
  } else {
    console.log('----- STAGE 1A END -----')
    return cube
  }
}

export default solverStage1a

const formulaUEdgeUL = cube => {
  let newCube = arrayClone(cube)
  console.log("formula F'L'")
  newCube = Lc(Fc(cube))
  return newCube
}

const formulaUEdgeUR = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log('formula FR')
  newCube = F(R(cube))
  return newCube
}

const formulaUEdgeUB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula F'U'LU'")
  newCube = Uc(Uc(L(Fc(cube))))
  return newCube
}

const formulaUEdgeUF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula F'UL'U'")
  newCube = Uc(Lc(U(Fc(cube))))
  return newCube
}

const formulaREdgeUL = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula U'RUU")
  newCube = U(U(R(Uc(cube))))
  return newCube
}

const formulaREdgeUR = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log('formula R')
  newCube = R(cube)
  return newCube
}

const formulaREdgeUB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula URU'")
  newCube = Uc(R(U(cube)))
  return newCube
}

const formulaREdgeUF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula U'RU")
  newCube = U(R(Uc(cube)))
  return newCube
}

const formulaDEdgeUL = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula FL'F'")
  newCube = Fc(Lc(F(cube)))
  return newCube
}

const formulaDEdgeUR = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula UF'R")
  newCube = R(Fc(U(cube)))
  return newCube
}

const formulaDEdgeUB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula UUFUL'U")
  newCube = U(Lc(U(F(U(U(cube))))))
  return newCube
}

const formulaDEdgeUF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula F'UL'U'")
  newCube = Uc(Lc(U(Fc(cube))))
  console.log(newCube)
  return newCube
}

const formulaLEdgeUL = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula L'")
  newCube = Lc(cube)
  return newCube
}

const formulaLEdgeUR = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula UUL'U'U'")
  newCube = Uc(Uc(Lc(U(U(cube)))))
  return newCube
}

const formulaLEdgeUB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula U'L'F")
  newCube = F(Lc(Uc(cube)))
  return newCube
}

const formulaLEdgeUF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula UL'U'")
  newCube = U(Lc(Uc(cube)))
  return newCube
}

const formulaUnderDEdgeUL = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log("formula D'L'2")
  newCube = Lc(Lc(Dc(cube)))
  return newCube
}

const formulaUnderDEdgeUR = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log('formula DR2')
  newCube = R(R(D(cube)))
  return newCube
}

const formulaUnderDEdgeUB = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log('formula D2B2')
  newCube = B(B(D(D(cube))))
  return newCube
}

const formulaUnderDEdgeUF = cube => {
  let newCube = cube.map(arr => arr.slice())
  console.log('formula F2')
  newCube = F(F(cube))
  return newCube
}

const isStage1aComplete = cube => {
  // cross U completed
  let colorU = cube[4][10]
  let crossUcompleted = false
  if (
    cube[3][10] == colorU &&
    cube[4][9] == colorU &&
    cube[4][11] == colorU &&
    cube[5][10] == colorU &&
    cube[4][0] == cube[4][1] &&
    cube[0][4] == cube[1][4] &&
    cube[8][5] == cube[7][5] &&
    cube[4][8] == cube[4][7]
  ) {
    crossUcompleted = true
  }

  if (crossUcompleted) {
    return true
  }
  return false
}
