import mappingTable from './mapping'

const baseTransformation = (cube, table) => {
  let newCube = cube.map(function(arr) {
    return arr.slice()
  })

  table.forEach(t => {
    newCube[t[2]][t[3]] = cube[t[0]][t[1]]
  })

  return newCube
}

const U = cube => baseTransformation(cube, mappingTable.U)
const Uc = cube => baseTransformation(cube, mappingTable.Uc)
const L = cube => baseTransformation(cube, mappingTable.L)
const Lc = cube => baseTransformation(cube, mappingTable.Lc)
const F = cube => baseTransformation(cube, mappingTable.F)
const Fc = cube => baseTransformation(cube, mappingTable.Fc)
const R = cube => baseTransformation(cube, mappingTable.R)
const Rc = cube => baseTransformation(cube, mappingTable.Rc)
const B = cube => baseTransformation(cube, mappingTable.B)
const Bc = cube => baseTransformation(cube, mappingTable.Bc)
const D = cube => baseTransformation(cube, mappingTable.D)
const Dc = cube => baseTransformation(cube, mappingTable.Dc)
const Y = cube => baseTransformation(cube, mappingTable.Y)
const Yc = cube => baseTransformation(cube, mappingTable.Yc)
const X = cube => baseTransformation(cube, mappingTable.X)

export { U, Uc, L, Lc, F, Fc, R, Rc, B, Bc, D, Dc, Y, Yc, X }
