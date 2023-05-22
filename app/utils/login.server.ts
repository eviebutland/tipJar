import { db } from "./db.server";
import type { Login } from "./formValidation";

export const login = async (formData: Login) => {
  console.log(formData);
  return await db.user.findUnique({
    where: {
      email: formData.email,
    },
  });
};
