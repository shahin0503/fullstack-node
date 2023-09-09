const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.send('Hello, My name is Shahinbanu Bodeliwala and welcome to my application').status(200)
})


app.get('/about', (req, res) => {
    res.send('This is a full stack web application, The backend is built using Node JS and Express. The frontend is written using HTML, CSS and JS').status(200)
})



app.get('/api', (req, res) => {
    const users = [{
        name: 'Shahinbanu',
        id: 1
    },
    {
        name: 'John Doe',
        id: 2
    },  {
        name: 'William Smith',
        id: 3
    }]
    res.json(users)
})

app.use((req,res, next) => {
    res.status(404).send('Route not found')
})
app.listen(PORT, () => {
    console.log('listening on port ', PORT)
})