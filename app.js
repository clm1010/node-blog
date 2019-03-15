const queryString = require('querystring')
const handleUserRouter = require('./src/router/user')
const handleblogRouter = require('./src/router/blog')

const serverHandle = (req, res) => {
    // 设置返回格式 JSON
    res.setHeader('Content-type', 'application/json')

    // 获取 path
    const url = req.url
    req.path = url.split('?')[0]

    // 解析query
    res.query = queryString.parse(url.split('?')[0])

    // 处理 blog 路由
    const blogData = handleblogRouter(req, res)
    if (blogData) {
        res.end(
            JSON.stringify(blogData)
        )
        return
    }
    // 处理 user 路由
    const userData = handleUserRouter(req, res)
    if (userData) {
        res.end(
            JSON.stringify(userData)
        )
        return
    }

    // 未命中返回404
    res.writeHead(404, {"Content-type": "text/plan"})
    res.write("404 Not Found\n")
    res.end()
}

module.exports = serverHandle

// process.env.NODE_ENV