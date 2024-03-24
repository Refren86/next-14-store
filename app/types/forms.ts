import { z } from "zod";

export type TLoginFields = {
  email: string;
  password: string;
};

export type TSignUpFields = TLoginFields & {
  name: string;
  surname: string;
};

export type TGeneralFormFields<T> = {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof T]?: string[];
  };
};

export type TFormState<T> = TGeneralFormFields<T> & {
  fieldValues: T;
};

export const LoginSchema = z.object({
  email: z.string().email({ message: "Невалідний емейл" }),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
    message:
      "Пароль має бути не менше 6 символів, містити великі і малі літери та цифри",
  }),
});

export const SignUpSchema = LoginSchema.extend({
  name: z.string({ required_error: "Ім'я не вказано" }),
  surname: z.string({ required_error: "Прізвище не вказано" }),
});
