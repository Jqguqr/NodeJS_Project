//creamos un mock de la DB
//const list = [];
//const db = require('mongoose');
const e = require('express');
const Model = require('./model');

/*
const user = 'db_user_telegrom';
const password = '9zO83aXQyNpKqGub';
const dbname = 'telegrom';
const uri = `mongodb+srv://${user}:${password}@cluster0.gjs8i.mongodb.net/${dbname}?retryWrites=true&w=majority`;

db.Promise = global.Promise;
db.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(e => console.log(e));*/

function addMessage(message){
    //list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filterUser){
    return new Promise((resolve, reject) => {
        let filter = {};
        if(filterUser !== null){
            filter = { user: filterUser };
        }
        //const messages = Model.find(filter)//pedimos todos los documentos
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if(error){
                    reject(error);
                    return false;
                }

                resolve(populated);

            })/*
            .catch(e => {
                reject(e);
            });*/
            //resolve(messages);
    })
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id: id
    });

    foundMessage.message = message;
    const newMessage = foundMessage.save();
    return newMessage;
}

function removeMessage(id){
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
}