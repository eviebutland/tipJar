import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getUsers().map((user) => {
      return db.user.create({ data: user });
    })
  );
}

seed();

function getUsers() {
  return [
    {
      name: "Evie B",
      bio: "Evie is a developer, please tip to allow me to buy a new laptop",
      email: "evie.butland@gmail.com",
      password: "password",
      role: "Developer",
      profilePicture: "",
      payment: {
        cardNo: 2342342,
        sortCode: 23423,
      },
      createdAt: "2023-05-01T19:05:08.514Z",
      updatedAt: "2023-05-01T19:05:08.514Z",
    },
  ];
}
