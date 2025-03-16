import { X } from "lucide-react";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "This is not valid email" }),
  password: z.string().min(6, { message: "password must contain 6 character" }),
});
export const signupSchema = z.object({
  fullName: z.string().min(3, { message: "name must have 3 character" }),
  email: z.string().email({ message: "This is not valid email" }),
  password: z.string().min(6, { message: "password must contain 6 character" }),
});
