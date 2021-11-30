const serverHandle = (req, res) => {
  res.setHeader('Content-type', 'application/json')
  const resData = {
    name: '褚利民',
    site: 'CLM'
  }

  res.end(
    JSON.stringify(resData)
  )
}

module.exports = serverHandle