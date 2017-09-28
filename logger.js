let logs = []

const logger = transformation => {
  logs = [...logs, transformation]
}

const nbRealTransformations = () => {
  return logs.filter(t => t != 'Y' && t != "Y'" && t != 'X').length
}

const sLog = () => {
  let s = ''
  logs.forEach(t => {
    s = s + t
  })
  return s
}

const log = () => {
  // All transformations
  console.log(sLog())

  // Count, without Y, Yc and X
  console.log(nbRealTransformations() + ' transformations')
}

const clearLogs = () => {
  logs = []
}

export default log

export { logger, clearLogs, sLog, nbRealTransformations }
