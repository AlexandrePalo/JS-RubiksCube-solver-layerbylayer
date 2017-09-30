import fs from 'fs'
import solver from './solver'
import { b, w, r, o, y, g } from './colors'
import mixCube from './mix'
import { getLogs, clearLogs } from './logger'
import { isStage1bComplete } from './stage1b'

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
  for (let i = 0; i < nb; i++) {
    let beginCube = mixCube(solvedCube)
    clearLogs()
    solver(beginCube)
    dataset.push(Object.assign({}, getLogs()))
  }

  let stream = fs.createWriteStream('./output.txt')
  stream.once('open', function(fd) {
    dataset.forEach(d =>
      stream.write(
        String(d.stage1a.transformations) +
          ';' +
          String(d.stage1a.nbRealTransformations) +
          ';' +
          String(d.stage1a.time) +
          ';' +
          String(d.stage1b.transformations) +
          ';' +
          String(d.stage1b.nbRealTransformations) +
          ';' +
          String(d.stage1b.time) +
          ';' +
          String(d.stage2.transformations) +
          ';' +
          String(d.stage2.nbRealTransformations) +
          ';' +
          String(d.stage2.time) +
          ';' +
          String(d.stage3a.transformations) +
          ';' +
          String(d.stage3a.nbRealTransformations) +
          ';' +
          String(d.stage3a.time) +
          ';' +
          String(d.stage3b.transformations) +
          ';' +
          String(d.stage3b.nbRealTransformations) +
          ';' +
          String(d.stage3b.time) +
          ';' +
          String(d.stage4.transformations) +
          ';' +
          String(d.stage4.nbRealTransformations) +
          ';' +
          String(d.stage4.time) +
          ';' +
          String(d.stage5.transformations) +
          ';' +
          String(d.stage5.nbRealTransformations) +
          ';' +
          String(d.stage5.time) +
          '\n'
      )
    )
    stream.end()
  })
}

export default grapher
