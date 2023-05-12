import { db } from "./db.server";
import type { Login } from "./formValidation";

export const login = (formData: Login) => {
  return db.user.findUnique({
    where: {
      email: formData.email,
    },
  });
};
