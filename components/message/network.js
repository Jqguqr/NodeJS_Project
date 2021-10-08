const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req, res){

    const filterMessage = req.query.user || null;

    controller.getMessages(filterMessage)
        .then((messageList) => {
            response.success(req, res, messageList, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Eror', 500, e);
        });
    /*
    console.log(req.headers);
    res.header({
        "custom-headers": "Nuestro valor personalizado",
    });
    response.success(req, res, 'Lista de mensajes');*/
});

router.post('/', function(req, res){
    //console.log(req.query);
    //console.log(req.body);

    controller.addMessage(req.body.user, req.body.message)
        .then((fullmessage) => {
            response.success(req, res, fullmessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Información invalida', 400, 'Error en el controlador');
        });

});

router.patch('/:id', function(req, res){
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id)
    .then(() =>{
        response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e);
    });
});

module.exports = router;