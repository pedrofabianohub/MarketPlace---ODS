const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Loja = new Schema({

    nome: {
        type: String,
    },
    logo:{
        type: String,
    }

})

module.exports = mongoose.model('Loja', Loja)