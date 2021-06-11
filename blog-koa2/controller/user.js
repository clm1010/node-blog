const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')

const login = async (username, password) => {
  username = escape(username)
  // 生成加密密码
  password = genPassword(password)
  password = escape(password)
  const sql = `select id, username, password, realname from users where username=${username} and password=${password};`
  
  const rows = await exec(sql)
  console.log('sql is ', sql)
  return rows[0] || {}
}

module.exports = {
  login
}
