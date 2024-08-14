const express = require('express')
const router = express.Router()

const Loja = require('../models/lojas.model')
const Product = require('../models/produtos.model')

router.get('/', async (req, res) => {
    try {
        const loja = await Loja.find()
        
        let products = await Product.find()

        res.json({ error: false, loja: { ...loja._doc, products} })

    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})

module.exports = router