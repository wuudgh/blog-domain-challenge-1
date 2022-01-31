const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.create({
    data: { username: "alicemartin", email: "martin@gmail.com" },
  });

  ///console.log(`${createdUsers.count} users created`, createdUsers);

  // Add your code here
  const createdProfile = await prisma.profile.create({
    data: {
      profilePicture: "ajudhifu8dfyhe",
      user: {
        connect: {
          id: createdUsers.id,
        },
      },
    },
  });
  console.log(createdProfile);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
