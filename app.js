const express = require ('express');
const cors = require ('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin: '*'}));
app.use(express.json());

app.get('/api', (req, res)=> {
    res.send('API funcionando!');
});

module.exports= app;


