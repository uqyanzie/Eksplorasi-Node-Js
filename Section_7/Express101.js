const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/weather', (req, res) => {
    res.send('Your weather')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})