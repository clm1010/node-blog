const handleBlogRouter = (req, res) => {
  const method = req.method // GET POST

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    return {
      msg: '这是获取博客列表的接口'
    }
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: '获取博客详情'
    }
  }

  // 新建博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    return {
      msg: '新建博客'
    }
  }

  // 更新博客
  if (method === 'POST' && path === '/api/blog/update') {
    return {
      msg: '更新博客'
    }
  }

  // 删除博客
  if (method === 'POST' && path === '/api/blog/del') {
    return {
      msg: '删除博客'
    }
  }
}

module.exports = handleBlogRouter