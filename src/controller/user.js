const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')

const login = (username, password) => {
    username = escape(username)
    
    // 生成加密密码
    password = genPassword(password)
    
    password = escape(password)

    let sql = `
        select username, realname from users where username=${username} and password=${password};
    `
    console.log('sql is', sql)
    return exec(sql).then(rows => {
        // 如果是undefined 就返回空对象
        return rows[0] || {}
    })
}

module.exports = {
    login
}