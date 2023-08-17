import express from "express"
import userV1  from "./router/v1/users"
import userV2 from "./router/v2/users"


const app = express(); // Inicializamos clase que tiene todos los métodos y propiedades.
const port = 3000;

app.use("/v1", userV1)
app.use("/v2", userV2)


// inicializar puerto para escuchar peticiones
app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});
