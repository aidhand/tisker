import prisma from "@/lib/prisma";

async function main() {
  const data = await prisma.user.create({
    data: {
      email: "me@aidhan.net",
      name: "Aidhan",

      spaces: {
        create: [
          { name: "Fitness" },
          { name: "Pharmacology" },
          { name: "Photography" },
          { name: "Programming" },
          { name: "Obstetrics" },
        ],
      },
    },
  });

  return data;
}

main()
  .then(async (data) => {
    console.log("Seeded!");
    console.log(data);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
