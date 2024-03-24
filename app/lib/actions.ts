"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { SignUpWithPasswordCredentials } from "@supabase/supabase-js";

import { createSupabaseAppClient } from "./supabase/server";
import {
  LoginSchema,
  SignUpSchema,
  TFormState,
  TLoginFields,
  TSignUpFields,
} from "../types/forms";

export async function loginAction(
  prevState: TFormState<TLoginFields>,
  formData: FormData
): Promise<TFormState<TLoginFields>> {
  const supabase = createSupabaseAppClient();

  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const validateFields = LoginSchema.safeParse(rawFormData);

  if (!validateFields.success) {
    return {
      success: false,
      errors: validateFields.error.flatten().fieldErrors,
      message: "Поля невалідні. Спробуйте ще раз",
      fieldValues: prevState.fieldValues,
    };
  }

  const { error } = await supabase.auth.signInWithPassword(validateFields.data);

  if (error) {
    redirect("/error");
  } else {
    revalidatePath("/", "layout");

    return {
      success: true,
      errors: undefined,
      message: "Успішно.",
      fieldValues: prevState.fieldValues,
    };
  }
}

export async function signUpAction(
  prevState: TFormState<TSignUpFields>,
  formData: FormData
): Promise<TFormState<TSignUpFields>> {
  const supabase = createSupabaseAppClient();

  const rawFormData = {
    name: formData.get("name"),
    surname: formData.get("surname"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const validateFields = SignUpSchema.safeParse(rawFormData);

  if (!validateFields.success) {
    return {
      success: false,
      errors: validateFields.error.flatten().fieldErrors,
      message: "Поля невалідні. Спробуйте ще раз",
      fieldValues: prevState.fieldValues,
    };
  }

  const {
    data: { email, password, name, surname },
  } = validateFields;

  const reqBody: SignUpWithPasswordCredentials = {
    email,
    password,
    options: {
      data: {
        first_name: name,
        last_name: surname,
      },
    },
  };

  const { error } = await supabase.auth.signUp(reqBody);

  if (error) {
    redirect("/error");
  } else {
    revalidatePath("/", "layout");
    return {
      success: true,
      errors: undefined,
      message:
        "Е-мейл з підтвердженям аккаунту був відправлений на вказану пошту 💌",
      fieldValues: prevState.fieldValues,
    };
  }
}
