"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createSupabaseAppClient } from "./supabase/server";
import { LoginSchema, TLoginFormState } from "../types/forms";

export async function loginAction(
  prevState: TLoginFormState,
  formData: FormData
): Promise<TLoginFormState> {
  const supabase = createSupabaseAppClient();

  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const validateFields = LoginSchema.safeParse(rawFormData);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Поля невалідні. Спробуйте ще раз",
      fieldValues: {
        ...prevState.fieldValues,
      },
    };
  }

  const { error } = await supabase.auth.signInWithPassword(validateFields.data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/"); // show modal after or smth
}

export async function signup(formData: FormData) {
  const supabase = createSupabaseAppClient();

  // type-casting here for convenience
  // in practice, I should validate my inputs with zod
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        first_name: formData.get("name") as string,
        last_name: formData.get("surname") as string,
      },
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
