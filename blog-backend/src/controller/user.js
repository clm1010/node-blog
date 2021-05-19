const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')

/**
 * @deprecated 登录
 * @param {*} username 用户名
 * @param {*} password 密码
 * @returns
 */
const login = (username, password) => {
  username = escape(username)
  // 生成加密密码
  password = genPassword(password)
  password = escape(password)
  const sql = `select id, username, password, realname from users where username=${username} and password=${password};`
  console.log('sql is ', sql)
  return exec(sql).then((rows) => {
    return rows[0] || {}
  })
}

module.exports = {
  login
}
