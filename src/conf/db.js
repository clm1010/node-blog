const env = process.env.NODE_ENV // 环境参数

// 配置
let MYSQL_CONF
let REDIS_CONF

if (env === 'dev') {
    // mysql
    MYSQL_CONF = {
        host: 'localhost', // 连接地址
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'myblog'
    }

    // redis
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}

// 线上环境
if (env === 'production') {
    // mysql
    // 实际开发中 要写线上服务器地址配置
    MYSQL_CONF = {
        host: 'localhost', // 连接地址
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'myblog'
    }

    // redis
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}