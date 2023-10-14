const express = require('express')
const port = 5173

const app = express()
 
app.use(express.static('.'))
 
app.all('*', (req, res) => {
  res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(port, () => {
  console.log('Server listening on http://localhost:'+ port + '/...')
})