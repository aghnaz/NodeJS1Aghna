// import modules
const express = require('express'); //import module express
const app = express(); //eksekusi module express
const bodyParser = require('body-parser'); //import body-parser

app.use(bodyParser.urlencoded({extended: false})) //harus berada diatas semua endpoint

//method get
app.get('/test', (requrest, respone) => {
    respone.end("Ini GET XI RPL  ");
})

//method post
app.post('/test', (requrest, respone) => {
    respone.end("Ini POST XI RPL  ");
})

//endpoint get dg menggunakan parameter
app.get('/siswa/:nama', (requrest, response)=>{
    let namaSiswa = requrest.params.nama; //deklarasi variable namasiswa
    response.end("Menampilkan nama siswa " + namaSiswa);
})
//endpoint post, dg menggunakan body-parser untuk mengirimkan data
app.post('/siswa', (request, response)=>{
    let namaSiswa = request.body.name;
    let alamat = request.body.adress;
    response.end('menampilkan siswa baru ' + namaSiswa + ', yang beralamat di ' + alamat);
})
//endpoint delete, data yg diakses scr spesifik dg menggunakan parameter
app.delete('/siswa/:id', (request, response) => {
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    response.end('id ' + id + ' telah dihapus, dengan nama : ' +namaSiswa);
})
//endpoint update
app.put('/siswa/:id', (request, response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    let alamat = request.body.alamat;
    response.end('siswa dengan id : ' +id+ ' telah diupdate')
})


//instalasi port
app.listen('8080', (e) =>{
    console.log(e);
});