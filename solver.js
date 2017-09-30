import solverStage1a from './stage1a'
import solverStage1b from './stage1b'
import solverStage2 from './stage2'
import solverStage3a from './stage3a'
import solverStage3b from './stage3b'
import solverStage4 from './stage4'
import solverStage5 from './stage5'

const solver = cube => {
  return solverStage1b(solverStage1a(cube))
}

export default solver
