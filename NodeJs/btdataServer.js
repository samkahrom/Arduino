const express = require('express')
const app = express()
const port = 3000

app.get('/homepage', (req, res) => {
  res.send('Homepage!')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const serialport2 = new SerialPort('COM5', { baudRate: 9600 })

const parser = new Readline()
serialport2.pipe(parser)

parser.on('data', line => console.log(`> ${line}`))
//port.write('ROBOT POWER ON\n')