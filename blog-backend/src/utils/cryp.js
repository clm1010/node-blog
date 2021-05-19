const crypto = require('crypto')

/**
 * @deprecated 密钥
 */
const SECRET_KEY = 'Limin_851010#'

/**
 * @deprecated md5 加密
 * @param {*} content 加密内容
 */
function md5(content) {
  let md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex')
}

/**
 * @deprecated 加密函数
 * @param {*} password 密码
 */
function genPassword(password) {
  const str = `password=${password}&key=${SECRET_KEY}`
  return md5(str)
}
// 生成密码 放入数据库
// const result = genPassword('321')
// console.log(result)
module.exports = {
  genPassword
}
