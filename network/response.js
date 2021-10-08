//creamos un modulo que se encarque de responder a nuestras peticiones

exports.success = function(req, res, message, staus){
    res.status(staus || 200).send({
        error: '',
        body: message});
}

exports.error = function(req, res, message, staus, details){
    console.error('[response error]' + details);
    res.status(staus || 500).send({
        error: message,
        body: ''});
}
