const store = require('./store');

function addMessage(user, message){

    return new Promise((resolve, reject) => {
        if(!user || !message){
            console.error('[messageControler] No hay usuario o contraseña');
            reject('Datos incorrectos');
            return false;
        }

        const fullmessage = {
            user: user,
            message: message,
            date: new Date(),
        }
    
        //console.log(fullmessage);
        store.add(fullmessage);
        resolve(fullmessage);
    });

}

function getMessages(filterUser){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
}

function updateMessage(id, message){
    return new Promise(async (resolve, reject) => {
        if(!id || !message){
            reject('Invalid date');
            return false;
        }

        const result = await store.updateText(id, message);

        resolve(result);
    })
}

function deleteMessage(id){
    if(!id){
        reject('Id invalido');
        return false;
    }

    return new Promise((resolve, reject) => {
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            })
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
};