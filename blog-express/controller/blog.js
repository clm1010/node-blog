const xss = require('xss')
const { exec } = require('../db/mysql')

/**
 * @deprecated 获取博客列表
 * @param {*} author 作者
 * @param {*} keyword 标题
 * @returns 返回的是 promise
 */
const getList = (author, keyword) => {
  let sql =
    'select id, title, content, createtime, author from blogs where 1=1 '
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`
  console.log(sql)
  return exec(sql)
}

/**
 * @description 获取博客详情
 * @param {*} id 博客id
 * @returns
 */
const getDetail = (id) => {
  const sql = `select id, title, content, createtime, author from blogs where id='${id}';`
  return exec(sql).then((rows) => {
    return rows[0]
  })
}

/**
 * @description 新建博客
 * @param {Object} blogData 新建博客对象
 * @returns
 */
const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含 title content author属性
  const title = xss(blogData.title)
  // console.log('title is ', title
  const content = xss(blogData.content)
  const author = blogData.author
  const createTime = Date.now()
  const sql = `insert into blogs (title, content, createtime, author) values ('${title}','${content}','${createTime}','${author}');`
  return exec(sql).then((insertData) => {
    console.log('insertData is ', insertData)
    return {
      id: insertData.insertId
    }
  })
}

/**
 * @description 更新博客
 * @param {*} id 是要更新的博客 id
 * @param {*} blogData 博客对象
 * @returns
 */
const updateBlog = (id, blogData = {}) => {
  // id 是要更新的博客 id
  // blogData 是一个博客对象，包含 title content 属性
  const title = xss(blogData.title)
  const content = xss(blogData.content)
  const sql = `update blogs set title='${title}', content='${content}' where id='${id}';`
  return exec(sql).then((updateData) => {
    console.log('updateData is ', updateData)
    if (updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}

/**
 * @description 删除博客
 * @param {*} id 是要删除的博客 id
 * @returns
 */
const delBlog = (id, author) => {
  //  id 就是要删除博客的 id
  // console.log('delBlog', id)
  const sql = `delete from blogs where id='${id}' and author='${author}';`
  return exec(sql).then((deleteData) => {
    console.log('deleteData is ', deleteData)
    if (deleteData.affectedRows > 0) {
      return true
    }
    return false
  })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
