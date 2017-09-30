import solverStage1a from './stage1a'
import solverStage1b from './stage1b'
import solverStage2 from './stage2'
import solverStage3a from './stage3a'
import solverStage3b from './stage3b'
import solverStage4 from './stage4'
import solverStage5 from './stage5'
import { startTimer } from './logger'

const solver = cube => {
  startTimer()
  return solverStage5(
    solverStage4(
      solverStage3b(
        solverStage3a(solverStage2(solverStage1b(solverStage1a(cube))))
      )
    )
  )
}

export default solver
