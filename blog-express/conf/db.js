const env = process.env.NODE_ENV // 环境参数

// 配置
let MYSQL_CONF
let REDIS_CONF

if (env === 'dev') {
  // 开发环境修改这里
  // mysql
  MYSQL_CONF = {
    host: '127.0.0.1',
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

if (env === 'production') {
  // 线上环境修改这里
  // mysql
  MYSQL_CONF = {
    host: '127.0.0.1',
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