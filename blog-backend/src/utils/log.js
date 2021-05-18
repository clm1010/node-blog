const fs = require('fs')
const path = require('path')

/**
 * @description 写日志
 * @param {*} writeStream 
 * @param {*} log 
 */
function writeLog(writeStream, log) {
  writeStream.write(log + '\n') // 关键代码
}

/**
 * @description 生成 write Stream
 * @param {*} fileName 文件名称
 */
function createWriteStream(fileName) {
  const fullFileName = path.join(__dirname, '../', '../', 'logs', fileName)
  const writeStream = fs.createWriteStream(fullFileName, {
    flags: 'a'
  })
  return writeStream
}

/**
 * @description  写访问日志
 */
const accessWriteStream = createWriteStream('access.log')
function access(log) {
  writeLog(accessWriteStream, log)
}

module.exports = {
  access
}