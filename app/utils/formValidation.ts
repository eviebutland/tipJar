import type { User } from "@prisma/client";
import { number, string, object } from "yup";

export function validateUserForm(formData: User) {
  const userSchema = object({
    password: string().required(),
    name: string().required(),
    bio: string(),
    role: string().required(),
    profilePicture: string().url(),
    payment: {
      cardNo: number().required(),
      sortCode: number().required(),
    },
    email: string().email().required(),
  });

  return userSchema.validate(formData);
}
