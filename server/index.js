const express = require('express')
const app = express()
const handlebars = require("express-handlebars")
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const socketManage = require('./socketManage')(io)
const PORT = process.env.PORT || 80
const path = require('path')

const socketsStatus = {};

//config and set handlebars to express
const customHandlebars = handlebars.create({ layoutsDir: "./views" });

app.engine("handlebars", customHandlebars.engine);
app.set("view engine", "handlebars");

io.on('connection', socketManage )
// In dev mode just hide hide app.uss(... ) below
app.use( express.static(path.join(__dirname, '../build')))
server.listen( PORT, () => console.log('Server runnin @ ' + PORT ))
