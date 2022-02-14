const http = require('http').createServer();

const io = require('socket.io')(http, {
  cors: {origin: '*'}
})

io.on('connection', (socket)=>{
  socket.on('message',(message)=>{
    console.log(message.user)
    io.emit('message', {user: message.user, message: message.message, image: message.image});
  })
})

http.listen(8080, ()=>console.log('listening on http://localhost:9000'))