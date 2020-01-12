const express = require('express')
const app = express()
const path = require('path')
const port = '3000'
app.use(express.static(__dirname + "/scripts"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));

})

app.get('/loading', (req, res) => {
    console.log("is this working");
    res.sendFile(path.join(__dirname, '/pages/loading.html'));
})

app.listen(port, () => {
    console.log('Server is running on http://localhost:3000');
})