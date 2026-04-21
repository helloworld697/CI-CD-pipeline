const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 8080

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/api/info', (req, res) => {
  res.json({ message: 'Hello from the backend!', version: '1.0.0' })
})


app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})