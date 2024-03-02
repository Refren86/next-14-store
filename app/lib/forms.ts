"use server";

import { login } from "./auth";

export async function handleLogin(formData: FormData) {
  await login(formData);
}
