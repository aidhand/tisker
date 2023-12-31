import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { cache } from "react";

const prisma = new PrismaClient().$extends(withAccelerate());
export default prisma;

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

    cacheStrategy: {
      ttl: 60,
      swr: 120,
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

    cacheStrategy: {
      ttl: 60,
      swr: 120,
    },
  });

  return space;
});
