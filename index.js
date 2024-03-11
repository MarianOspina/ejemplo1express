const express = require('express')
const app= express ()
const port = 3000

app.get('/Jai', (req, res) => {
    res.send('Stray Kids Everywhell around word :3')
})

app.listen(port,() => {
console.log('La aplicación se esta ejecutando por el puerto ' + port)


})