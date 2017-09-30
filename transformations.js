import mappingTable from './mapping'
import { loggerBuffer } from './logger'
import { arrayClone } from './utils'

const baseTransformation = (cube, table) => {
  let newCube = arrayClone(cube)

  table.forEach(t => {
    newCube[t[2]][t[3]] = cube[t[0]][t[1]]
  })

  return newCube
}

const U = cube => {
  loggerBuffer('U')
  return baseTransformation(cube, mappingTable.U)
}
const Uc = cube => {
  loggerBuffer("U'")
  return baseTransformation(cube, mappingTable.Uc)
}
const L = cube => {
  loggerBuffer('L')
  return baseTransformation(cube, mappingTable.L)
}
const Lc = cube => {
  loggerBuffer("L'")
  return baseTransformation(cube, mappingTable.Lc)
}
const F = cube => {
  loggerBuffer('F')
  return baseTransformation(cube, mappingTable.F)
}
const Fc = cube => {
  loggerBuffer("F'")
  return baseTransformation(cube, mappingTable.Fc)
}
const R = cube => {
  loggerBuffer('R')
  return baseTransformation(cube, mappingTable.R)
}
const Rc = cube => {
  loggerBuffer("R'")
  return baseTransformation(cube, mappingTable.Rc)
}
const B = cube => {
  loggerBuffer('B')
  return baseTransformation(cube, mappingTable.B)
}
const Bc = cube => {
  loggerBuffer("B'")
  return baseTransformation(cube, mappingTable.Bc)
}
const D = cube => {
  loggerBuffer('D')
  return baseTransformation(cube, mappingTable.D)
}
const Dc = cube => {
  loggerBuffer("D'")
  return baseTransformation(cube, mappingTable.Dc)
}
const Y = cube => {
  loggerBuffer('Y')
  return baseTransformation(cube, mappingTable.Y)
}
const Yc = cube => {
  loggerBuffer("Y'")
  return baseTransformation(cube, mappingTable.Yc)
}
const X = cube => {
  loggerBuffer('X')
  return baseTransformation(cube, mappingTable.X)
}

export { U, Uc, L, Lc, F, Fc, R, Rc, B, Bc, D, Dc, Y, Yc, X }
