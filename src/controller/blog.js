const { exec } = require('../db/mysql')

// 获取列表
const getList = (author, keyword) => {
   let sql = `select id, title, content, createtime, author from blogs where 1=1 `
   if (author) {
       sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`
    // 返回 promise
    return exec(sql)
}

// 获取详情
const getDetail = (id) => {
    let sql = `select * from blogs where id='${id}'`
    // rows[0] 返回第一个对象
    return exec(sql).then(rows => {
        return rows[0]
    })
}

// 新建博客
const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象
    // console.log('newBlog.......' + blogData)

    const title = blogData.title
    const content = blogData.content
    const author = blogData.author
    const creteTieme = Date.now()

    let sql = `
        insert into blogs (title, content, createtime, author) 
        values ('${title}', '${content}', ${creteTieme}, '${author}');
    `
    return exec(sql).then(insertData => {
        // console.log('insertData is ', insertData)
        return {
            id: insertData.insertId
        }
    })
}

// 更新博客
const updateBlog = (id, blogData = {}) => {
    // id 是更新博客的 id
    // blogData 是一个博客对象
    const title = blogData.title
    const content = blogData.content
    let sql = `
        update blogs set title='${title}', content='${content}' where id='${id}'
    `
    return exec(sql).then(updateData => {
        // console.log('updateData is ', updateData)
        if (updateData.affectedRows > 0) {
            return true
        }
        return false
    })
}

// 删除博客
const delBlog = (id, author) => {
    // id 就是要删除博客的 id
    let sql = `delete from blogs where id='${id}' and author='${author}';`
    return exec(sql).then(delData => {
        // console.log('delData is ', delData)
        if (delData.affectedRows > 0) {
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