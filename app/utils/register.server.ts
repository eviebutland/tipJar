import type { User, Prisma } from "@prisma/client";

import { db } from "./db.server";

export const createUser = async (
  formData: Prisma.UserCreateInput
): Promise<User> => {
  return await db.user.create({
    data: {
      ...formData,
    },
  });
};
