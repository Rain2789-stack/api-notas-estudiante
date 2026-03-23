const express = require('express');
const app = express();

app.use(express.json());

const notasRoutes = require('./routes/notas');
app.use('/notas', notasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
