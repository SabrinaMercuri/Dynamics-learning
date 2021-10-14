const express = require('express');
const cors = require('cors');
// const path = require('path'); pour le deploiement en ligne
const app = express();
app.use(cors());

const qcms = []

// ajout de socket.io
const server = require('http').Server(app)
const stats = []
const io = require('socket.io')(server, {
   cors: {
      origin: '*',
   }
})

io.on('connection', (socket) => {

    console.log(`Connecté au client ${socket.id}`);


    socket.on('envoiReponse',(data) => {
       console.log("envoie de réponse : ")
       console.log(data)
        stats[stats.length] = data;
    })

    socket.on('demandeReponse',() =>{
       socket.emit('envoieReponseStats',stats)
    })

    socket.on('sendQcm',(data) => {
      console.log(data)
      qcms[qcms.length] = data
    })

    socket.on('recupQcm', () => {
       console.log('reception demande qcm')
       socket.emit('getQcm',qcms)
    })

});

server.listen(3000, function () {  // mettre process.env.PORT à la place de 3000 pour le deploiement en ligne
    console.log('Votre app est disponible sur localhost:3000 !')
 })