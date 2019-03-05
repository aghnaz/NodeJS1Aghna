// Create Server

const express = require('express'); //import module express
const app = express(); //eksekusi module express

//eksekusi express dgn memanggil variable app
app.get('/test', function(requrest, respone){
    respone.send("abcdefh")
})

app.listen('1234');