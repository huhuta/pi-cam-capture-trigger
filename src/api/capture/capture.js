const axios = require('axios')

exports.capture = async (req, res) => {
  const { section, label } = req.params
  const promises = [...Array(3)].map((_, i) =>
    axios.get(
      `https://pi-cam-${i}.dudaji.org/${section}${label ? `/${label}` : ''}`
    )
  )
  await Promise.all(promises)
  res.send('ok')
}
