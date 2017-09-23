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
  Yc
} from './transformations'

// You MUST use the final cube to mix to a new old.
// If not, the cube may be not solvable.

const mixCube = (cube, nbMix = 10) => {
  let mixedCube = cube.map(arr => arr.slice())
  for (let i = 0; i < nbMix; i++) {
    let k = Math.floor(Math.random() * 14)
    console.log(transformationsArray[k])
    mixedCube = transformationsArray[k](mixedCube)
  }
  return mixedCube
}

// 14 basics transformations
const transformationsArray = [U, Uc, L, Lc, F, Fc, R, Rc, B, Bc, D, Dc, Y, Yc]

export default mixCube
