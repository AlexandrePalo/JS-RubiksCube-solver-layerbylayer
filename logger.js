let logs = []

const logger = transformation => {
  logs = [...logs, transformation]
}

const log = () => {
  // All transformations
  let sLog = ''
  logs.forEach(t => {
    sLog = sLog + t
  })
  console.log(sLog)

  // Count, without Y, Yc and X
  let nbRealTransformations = logs.filter(
    t => t != 'Y' && t != "Y'" && t != 'X'
  ).length
  console.log(nbRealTransformations + ' transformations')
}

const clearLogs = () => {
  logs = []
}

export default log

export { logger, clearLogs }
