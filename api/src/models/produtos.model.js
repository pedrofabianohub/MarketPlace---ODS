const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Produto = new Schema({

    loja_id:{
        type: Schema.Types.ObjectId,
        ref: 'Loja'
    },
    nome: {
        type: String,
    },
    capa:{
        type: String,
    },
    preco:{
        type: String,
    },





})

module.exports = mongoose.model('Produto', Produto)