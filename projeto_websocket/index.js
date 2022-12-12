const WebSocket = require('ws')

const wss = new WebSocket.Server({port: 8082})

wss.on("connection", ws => {
    console.log('client conectado')


    ws.on('message', data => {
        console.log(`client escreveu a mensagem: ${data}` )
    })



    ws.on('close', () => {
        console.log('cliente desconectado ')
    })
})