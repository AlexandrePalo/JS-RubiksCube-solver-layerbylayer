let logs = {}

let logsBuffer = []
let hrstart = null

const loggerBuffer = transformation => {
  logsBuffer = [...logsBuffer, transformation]
}

const setLogsStageFromBuffer = stage => {
  logs[stage].transformations = logsBuffer.slice()
  logs[stage].nbRealTransformations = nbRealTransformations(
    logs[stage].transformations.slice()
  )
  logsBuffer = []
}

const startTimer = () => {
  hrstart = process.hrtime()
}

const stopTimer = stage => {
  logs[stage].time = process.hrtime(hrstart)
  hrstart = null
}

const clearLogs = () => {
  logs = {
    stage1a: {
      transformations: [],
      nbRealTransformations: 0,
      time: 0
    },
    stage1b: {
      transformations: [],
      nbRealTransformations: 0,
      time: 0
    },
    stage2: {
      transformations: [],
      nbRealTransformations: 0,
      time: 0
    },
    stage3a: {
      transformations: [],
      nbRealTransformations: 0,
      time: 0
    },
    stage3b: {
      transformations: [],
      nbRealTransformations: 0,
      time: 0
    },
    stage4: {
      transformations: [],
      nbRealTransformations: 0,
      time: 0
    },
    stage5: {
      transformations: [],
      nbRealTransformations: 0,
      time: 0
    }
  }
}

const getLogs = () => {
  return Object.assign({}, logs)
}

export {
  loggerBuffer,
  startTimer,
  stopTimer,
  clearLogs,
  getLogs,
  setLogsStageFromBuffer
}

const nbRealTransformations = transformations => {
  return transformations.slice().filter(t => t != 'Y' && t != "Y'" && t != 'X')
    .length
}
