import { PrismaClient } from "@prisma/client";
import { cache } from "react";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export const getSpaces = cache(async (email: string) => {
  const spaces = await prisma.space.findMany({
    where: {
      user: {
        email,
      },
    },

    take: 24,
    orderBy: {
      updatedAt: "desc",
    },
  });

  return spaces;
});

export const getSpace = cache(async (id: string) => {
  const space = await prisma.space.findUnique({
    where: {
      id,
    },

    include: {
      projects: true,
    },
  });

  return space;
});
