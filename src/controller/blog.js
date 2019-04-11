const getList = (author, keyword) => {
    // 返回假数据
    return [
        {
            id: 1,
            title: '标题1',
            content: '内容1',
            author: 'clm',
            keyword: 'A',
            createTime: 1552632056171
        },
        {
            id: 2,
            title: '标题2',
            content: '内容2',
            author: 'ccc',
            keyword: 'B',
            createTime: 1552632098864
        }
    ]
}

const getDetail = (id) => {
   return {
        id: 1,
        title: '标题1',
        content: '内容1',
        author: 'clm',
        keyword: 'A',
        createTime: 1552632056171
    }
}

const newBlog = (blogData = {}) => {
    console.log('newBlog.......' + newBlog)
    return {
        id: 3
    }
}

const updateBlog = (id, blogData = {}) => {
    console.log('update blog', id, blogData)
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog
}