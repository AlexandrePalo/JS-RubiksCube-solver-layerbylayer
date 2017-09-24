import mappingTable from './mapping'
import { logger } from './logger'

const baseTransformation = (cube, table) => {
  let newCube = cube.map(function(arr) {
    return arr.slice()
  })

  table.forEach(t => {
    newCube[t[2]][t[3]] = cube[t[0]][t[1]]
  })

  return newCube
}

const U = cube => {
  logger('U')
  return baseTransformation(cube, mappingTable.U)
}
const Uc = cube => {
  logger("U'")
  return baseTransformation(cube, mappingTable.Uc)
}
const L = cube => {
  logger('L')
  return baseTransformation(cube, mappingTable.L)
}
const Lc = cube => {
  logger("L'")
  return baseTransformation(cube, mappingTable.Lc)
}
const F = cube => {
  logger('F')
  return baseTransformation(cube, mappingTable.F)
}
const Fc = cube => {
  logger("F'")
  return baseTransformation(cube, mappingTable.Fc)
}
const R = cube => {
  logger('R')
  return baseTransformation(cube, mappingTable.R)
}
const Rc = cube => {
  logger("R'")
  return baseTransformation(cube, mappingTable.Rc)
}
const B = cube => {
  logger('B')
  return baseTransformation(cube, mappingTable.B)
}
const Bc = cube => {
  logger("B'")
  return baseTransformation(cube, mappingTable.Bc)
}
const D = cube => {
  logger('D')
  return baseTransformation(cube, mappingTable.D)
}
const Dc = cube => {
  logger("D'")
  return baseTransformation(cube, mappingTable.Dc)
}
const Y = cube => {
  logger('Y')
  return baseTransformation(cube, mappingTable.Y)
}
const Yc = cube => {
  logger("Y'")
  return baseTransformation(cube, mappingTable.Yc)
}
const X = cube => {
  logger('X')
  return baseTransformation(cube, mappingTable.X)
}

export { U, Uc, L, Lc, F, Fc, R, Rc, B, Bc, D, Dc, Y, Yc, X }
