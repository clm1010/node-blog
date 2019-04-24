const env = process.env.NODE_ENV // 环境参数

// 配置
let MYSQL_CONF

if (env === 'dev') {
    MYSQL_CONF = {
        host: 'localhost', // 连接地址
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'myblog'
    }
}

if (env === 'production') {
    // 实际开发中 要写线上服务器地址配置
    MYSQL_CONF = {
        host: 'localhost', // 连接地址
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'myblog'
    }
}

module.exports = {
    MYSQL_CONF
}