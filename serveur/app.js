const express = require('express');
const cors = require('cors');
// const path = require('path'); pour le deploiement en ligne
const app = express();
app.use(cors());


// ajout de socket.io
const server = require('http').Server(app)
const io = require('socket.io')(server, {
   cors: {
      origin: '*',
   }
})

server.listen(3000, function () {  // mettre process.env.PORT à la place de 3000 pour le deploiement en ligne
    console.log('Votre app est disponible sur localhost:3000 !')
 })