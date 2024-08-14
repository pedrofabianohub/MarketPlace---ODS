const mongoose = require('mongoose')
const URI = 'mongodb+srv://pedrofabiano421:lICvl1C8YtDug7kz@dados.ei5q6mv.mongodb.net/clientes?retryWrites=true&w=majority'

mongoose.set('debug', true)

mongoose.connect(URI).then(() => {
    console.log('DB is up!')
}).catch((err) => {
    console.log(err)
})