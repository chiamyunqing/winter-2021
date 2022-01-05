const express = require('express')
const app = express()
const server = require('http').Server(app) //server is purely for setting up rooms
const io = require('socket.io')(server) //socket io will then know which server to connect
const {v4: uuidv4} = require('uuid')//rename function v4 to uuidv4

app.set('view engine', 'ejs') //node templating lang, embed js into html
app.use(express.static('public')) //javascript and css all in public

app.get('/', (req,res) => {
    res.redirect(`/${uuidv4()}`) //function generates a random roomId
})

app.get('/:room', (req,res) => {
    res.render('room', {roomId: req.params.room})
})

//io - server side
io.on('connection', socket => { //runs whenever connection is made
    //listener to event
    socket.on('join-room', (roomId, userId) => { //events to listen to - callback function
        socket.join(roomId) //this socket joins the room
        //inform others in the room that a new user is connected
        socket.broadcast.to(roomId).emit('user-connected', userId)

        socket.on('disconnect', () => {
            socket.broadcast.to(roomId).emit('user-disconnected', userId)
        })
    })

})

server.listen(3000)
