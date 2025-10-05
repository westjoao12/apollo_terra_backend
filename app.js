const express = require ('express');
const cors = require ('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin: '*'}));
app.use(express.json());

// Rotas
const nasaApiRoutes = require('./src/routes/nasagibs.routes');

app.use(nasaApiRoutes);

app.get('/', (req, res)=> {
    res.send('Seja Bem Vindo a API da Apollo Terra!');
});

module.exports= app;


