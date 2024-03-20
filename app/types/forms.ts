import { z } from "zod";

type TLoginFields = {
  email: string;
  password: string;
};

export type TLoginFormState = {
  message: string;
  errors?: {
    [K in keyof TLoginFields]?: string[];
  };
  fieldValues: {
    email: string;
    password: string;
  };
};

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
