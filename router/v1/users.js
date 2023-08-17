import { Router } from "express"

const router = Router()

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

  router.get("/users", (req, res) => {
    res.send(usersArray);
  });

  router.get("/users/:id", (req, res) => {
    // console.log(req);
    const userId = req.params.id;
    console.log(`El id seleccionado es: ${userId}`);
  
    const getUserById = usersArray.find((user) => user.id == userId);
  
    if (!getUserById) {
      res.status(404).send(`No se encontró el usuario con el id ${userId}`);
    }
    res.status(200).send(getUserById);
  });
  
  export default router