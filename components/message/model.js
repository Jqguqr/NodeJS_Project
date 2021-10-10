const mongoose = require('mongoose');
/*
const user = 'db_user_telegrom';
const dbname = 'telegrom';
const uri = `mongodb+srv://${user}:${password}@cluster0.gjs8i.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e));*/

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
});

const model = mongoose.model('Message', mySchema);

module.exports = model;