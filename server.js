const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server rodando e pronto para servir as URLs da NASA na porta ${PORT}`)
});