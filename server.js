const express = require('express');//la forma de node de traer modulos de otros sitios
//import expres from 'express';
const bodyParse = require('body-parser');

const db = require('./db');

//const response = require('./network/response');

//El Router nos permite separar cabeceras, por métodos, por url
//const router = express.Router();
//const router = require('./components/message/network');
const router = require('./network/routes');

const user = 'db_user_telegrom';
const password = '9zO83aXQyNpKqGub';
const dbname = 'telegrom';
const uri = `mongodb+srv://${user}:${password}@cluster0.gjs8i.mongodb.net/${dbname}?retryWrites=true&w=majority`;

db(`mongodb+srv://${user}:${password}@cluster0.gjs8i.mongodb.net/${dbname}?retryWrites=true&w=majority`);


var app = express();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
//app.use(router);

router(app);

/*
router.get('/message', function(req, res){
    //como leer las cabeceras}
    console.log(req.headers);
    res.header({
        "custom-headers": "Nuestro valor personalizado",
    });
    //res.send('Lista de mensajes');
    //llamos a nuestro mudulo reponse - metodo success pra responder a al llamada
    response.success(req, res, 'Lista de mensajes');
});

router.post('/message', function(req, res){
    console.log(req.query);
    console.log(req.body);
    //res.send('Mensaje ' + req.body.text + ' añadico corectamente');//respuesta plana
    //res.status(201).send();//respuesta vacia
    //res.status(201).send([{error: '', body: 'Creado corectamente'}]);//repuesta estructurada
    
    if(req.query.error == "ok"){
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulación de los errores');
    }
    else{
        response.success(req, res, 'Creado correctamente', 201);
    }

});*/ //llevada a components/message/network

//servi estaticos
app.use('/app', express.static('public'));

// '/' quiere decir cualquier url
//app.use('/', function(req, res){
//    res.send('Hola');
//})

app.listen(3000);
console.log('La aplicación está escucando en http://localhost:3000');