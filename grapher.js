import fs from 'fs'
import solver from './solver'
import { b, w, r, o, y, g } from './colors'
import mixCube from './mix'
import { nbRealTransformations, clearLogs } from './logger'

const solvedCube = [
  [0, 0, 0, g, g, g, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, g, g, g, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, g, g, g, 0, 0, 0, 0, 0, 0],
  [o, o, o, w, w, w, r, r, r, y, y, y],
  [o, o, o, w, w, w, r, r, r, y, y, y],
  [o, o, o, w, w, w, r, r, r, y, y, y],
  [0, 0, 0, b, b, b, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, b, b, b, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, b, b, b, 0, 0, 0, 0, 0, 0]
]

const grapher = nb => {
  let dataset = []
  let errors = 0
  for (let i = 0; i < nb; i++) {
    try {
      let beginCube = mixCube(solvedCube)
      clearLogs()
      solver(beginCube)
      dataset.push(nbRealTransformations())
    } catch (e) {
      errors = errors + 1
    }
  }
  console.log(errors)
  let stream = fs.createWriteStream('./output.txt')
  stream.once('open', function(fd) {
    dataset.forEach(d => stream.write(String(d) + '\n'))
    stream.end()
  })
  return dataset
}

export default grapher
