const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// Aplicar o CORS antes de qualquer outra rota ou middleware que precise dele
app.use(cors());

// Configuração de logging
app.use(morgan('dev'));

// Middlewares para lidar com dados JSON e URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Conexão com o banco de dados
require('./database');

// Importação de rotas
const helloWorld = require('./routes/helloWorld.routes');
const lojaRoute = require('./routes/loja.routes');

// Rotas
app.use('/helloworld', helloWorld);
app.use('/', lojaRoute);

// Configuração da porta
app.set('port', process.env.PORT || 8000);

// Iniciando o servidor
app.listen(app.get('port'), () => {
    console.log(`Server is up on port ${app.get('port')}!`);
});
