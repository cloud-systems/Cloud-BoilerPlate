const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
const TOKEN_PATH = 'token.json';
const port = '3500'

app.use(express.static("/scripts")) 
app.use(express.static("/pages")) 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));

})

app.get('/loading', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/loading.html'));
})

app.get('/calendar', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/calendar.html'));
})

app.get('/data', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/data.html'));
})

app.get('/nav', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/nav.html'));
})

app.get('/log', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/log.html'));
})

<<<<<<< HEAD
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/test.html'));
})

=======
>>>>>>> 03c9601c57e9971c7967004df71e84507b4efaaa

app.listen(port, () => {
    console.log('Server is running on http://localhost:3500');
})

