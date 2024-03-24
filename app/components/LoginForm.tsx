import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import ButtonLoader from "./ui/ButtonLoader";
import { loginAction } from "@/app/lib/actions";
import { TFormState, TLoginFields } from "../types/forms";

type Props = {
  toggleModals: () => void;
};

const initialState: TFormState<TLoginFields> = {
  success: false,
  message: "",
  errors: undefined,
  fieldValues: {
    email: "",
    password: "",
  },
};

const LoginForm = ({ toggleModals }: Props) => {
  const router = useRouter();

  const [formState, loginDispatch] = useFormState(loginAction, initialState);

  if (formState.success) {
    router.push("/");
  }

  return (
    <form action={loginDispatch} className="space-y-4 mt-4">
      <Input
        name="email"
        type="email"
        placeholder="Е-мейл..."
        error={formState.errors?.email}
      />

      <Input
        name="password"
        type="password"
        placeholder="Пароль..."
        error={formState.errors?.password}
      />

      <LoginFormSubmitBtn />

      <p className="text-center">
        Немає аккаунта?{" "}
        <Link href="?sign-up=true" className="underline" onClick={toggleModals}>
          Створити аккаунт
        </Link>
      </p>
    </form>
  );
};

function LoginFormSubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <div className="pt-2">
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? <ButtonLoader /> : "Увійти"}
      </Button>
    </div>
  );
}

export default LoginForm;
