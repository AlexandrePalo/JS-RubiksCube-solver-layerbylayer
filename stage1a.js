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

const solverStage1a = (cube, consecutiveY = 0) => {
  let stage1aComplete = false

  // First check if stage1a is needed
  if (isStage1aComplete(cube)) {
    stage1aComplete = true
  }

  if (!stage1aComplete) {
    // For this stage, when you find an edge, you focus on it until it's well placed on U
    // step by step algorithm

    let colorU = cube[4][10]
    // Check edges on F
    if (cube[6][4] == colorU) {
      cube = Yc(F(F(cube)))
      return solverStage1a(s1FinishEdgeOnR(cube))
    }
    if (cube[7][3] == colorU) {
      cube = Yc(F(cube))
      return solverStage1a(s1FinishEdgeOnR(cube))
    }
    if (cube[7][5] == colorU) {
      cube = Yc(Fc(cube))
      return solverStage1a(s1FinishEdgeOnR(cube))
    }
    if (cube[8][4] == colorU) {
      cube = Yc(cube)
      return solverStage1a(s1FinishEdgeOnR(cube))
    }

    // No edge on F
    if (consecutiveY < 3) {
      // Y and recheck
      cube = Y(cube)
      return solverStage1a(cube, consecutiveY + 1)
    } else {
      // All non placed edges are on D
      if (cube[4][5] == colorU) {
        cube = R(R(cube))
        return solverStage1a(s1AlignEdgeOnR(cube))
      }
      if (cube[5][4] == colorU) {
        cube = R(R(D(cube)))
        return solverStage1a(s1AlignEdgeOnR(cube))
      }
      if (cube[4][3] == colorU) {
        cube = R(R(D(D(cube))))
        return solverStage1a(s1AlignEdgeOnR(cube))
      }
      if (cube[3][4] == colorU) {
        cube = R(R(Dc(cube)))
        return solverStage1a(s1AlignEdgeOnR(cube))
      }
      console.log('nothing ?')
    }
  } else {
    console.log(cube)
    console.log('----- STAGE 1A END -----')
    return cube
  }
}

export default solverStage1a

const s1FinishEdgeOnR = cube => {
  // If an edge is on R
  let colorEdgeU = cube[4][9]
  if (cube[4][7] == colorEdgeU) {
    return s1formulaAlpha(cube)
  } else if (cube[7][4] == colorEdgeU) {
    cube = Yc(U(cube))
    return s1formulaAlpha(cube)
  } else if (cube[4][1] == colorEdgeU) {
    cube = Yc(Yc(U(U(cube))))
    return s1formulaAlpha(cube)
  } else if (cube[1][4] == colorEdgeU) {
    cube = Y(Uc(cube))
    return s1formulaAlpha(cube)
  }
  console.log(cube)
  console.log('nothing ? finishEdgeOnR')
}

const s1AlignEdgeOnR = cube => {
  // Align R center with RU edge
  let colorEdgeR = cube[4][8]
  if (cube[4][7] == colorEdgeR) {
    return cube
  } else if (cube[7][4] == colorEdgeR) {
    return Yc(U(cube))
  } else if (cube[4][1] == colorEdgeR) {
    return Yc(Yc(U(U(cube))))
  } else if (cube[1][4] == colorEdgeR) {
    return Y(Uc(cube))
  }
  console.log(cube)
  console.log('nothing ? alignEdgeOnR')
}

const s1formulaAlpha = cube => {
  console.log("formula alpha (R'UF'U')")
  let newCube = cube.map(arr => arr.slice())
  newCube = Uc(Fc(U(Rc(cube))))
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
