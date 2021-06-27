'user strict'

var mongoose = require('mongoose');

var app = require('./app');
var port = process.env.PORT || 3977;

//hacemos la conexion
mongoose.connect('mongodb://localhost:27017/amigosDS02',(err,res)=>{
    if(err){
        throw err;
    }else{
        console.log('Conexion exitosa...');
        app.listen(port,function(){
            console.log('Servidor listo en http://localhost:'+port);
        });
    }
});