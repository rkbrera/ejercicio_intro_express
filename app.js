const express = require("express");
const app = express(); // Inicializamos clase que tiene todos los métodos y propiedades.
const port = 3000;

const usersArray = [
  {
    id: 1,
    name: "Rafael",
    lastName: "Quintero",
    occupation: "Backend Mentor",
  },
  {
    id: 2,
    name: "Rodrigo",
    lastName: "Cabrera",
    occupation: "Koder",
  },

  {
    id: 3,
    name: "Fer",
    lastName: "Kodemia",
    occupation: "Coordi Gen26 JS",
  },
];

// req = request = extraer info cliente (cuando me hablan)
// res = response = enviar de vuelta info al cliente (cuando respondo)

app.get("/v2/users", (req, res) => {
  res.send(usersArray);
});

// New Endpoint
app.get("/v2/users/:id", (req, res) => {
  //  console.log("endpoint 2");
  const userId = req.params.id;
  console.log(`El id seleccionado es: ${userId}`);

  if (userId) {
    const getUserById = (id) => usersArray.find((user) => user.id === id);
    const foundUser = getUserById(2);
    console.log(foundUser);
    res.status(200).send(foundUser);
  } else {
    res.status(404).send({ error: "No se encontro usuario" });
  }
});

// inicializar puerto para escuchar peticiones
app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});
