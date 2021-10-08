const db = require('mongoose');

db.Promise = global.Promise;
async function connect(url){
    await db.connect(url,
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    //console.log('[db] Conectada con éxito');
        .then(() => console.log('[db] Conectada con éxito'))
        .catch(e => console.log(e));
}

module.exports = connect;