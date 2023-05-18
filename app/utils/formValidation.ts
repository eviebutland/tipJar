import type { User } from "@prisma/client";
import { number, string, object } from "yup";

export interface Login {
  email: FormDataEntryValue;
  password: FormDataEntryValue;
}

export function validateLogin(formData: Login) {
  const loginSchema = object({
    email: string().email().required(),
    password: string().required(),
  });

  try {
    return loginSchema.validateSync(formData);
  } catch (error) {
    return error;
  }
}

export function validateUserForm(formData: User) {
  const userSchema = object({
    id: string(),
    password: string().required(),
    name: string().required(),
    bio: string(),
    role: string().required(),
    profilePicture: string().url(),
    cardNo: number().required(),
    sortCode: number().required(),
    email: string().email().required(),
  });

  try {
    return userSchema.validateSync(formData);
  } catch (error) {
    return error;
  }
}
