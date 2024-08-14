const Loja = require('../models/lojas.model')
const Produtos = require('../models/produtos.model')

const LojasJson = require('./loja.json')

require('../database')

const addLojaEProdutos = async () => {
    try {
        
        for (let loja of LojasJson){
            const newLoja = await new Loja(loja).save()

            await Produtos.insertMany(loja.Produtos.map((produto) => ({
                ... produto, loja_id: newLoja._id
            })))
        }

        console.log('Final do script')

    } catch (err) {
        console.log(err)
    }
}

addLojaEProdutos()