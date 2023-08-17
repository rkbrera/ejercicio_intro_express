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

const getUserById = (id) => usersArray.find((user) => user.id === id);
const foundUser = getUserById(3);
console.log(foundUser);
