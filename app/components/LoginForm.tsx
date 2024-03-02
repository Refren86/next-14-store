import Link from "next/link";

import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { handleLogin } from "../lib/forms";

type Props = {
  toggleModals: () => void;
};

const LoginForm = ({ toggleModals }: Props) => {
  return (
    <form action={handleLogin} className="space-y-4 mt-4">
      <Input name="email" type="email" placeholder="Е-мейл..." />

      <Input name="password" type="password" placeholder="Пароль..." />

      <div className="pt-2">
        <Button type="submit" className="w-full">
          Увійти
        </Button>
      </div>

      <p className="text-center">
        Немає аккаунта?{" "}
        <Link href="?sign-up=true" className="underline" onClick={toggleModals}>
          Створити аккаунт
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;