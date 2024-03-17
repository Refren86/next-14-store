"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createSupabaseAppClient } from "./supabase/server";

export async function login(formData: FormData) {
  const supabase = createSupabaseAppClient();

  // type-casting here for convenience
  // in practice, I should validate my inputs with zod
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  
  const { error } = await supabase.auth.signInWithPassword(data);

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
