import Link from "next/link";
import { useState } from "react";

import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/Dialog";

type SignUpModalProps = {
  isOpen: boolean;
  toggleSignUpModal: () => void;
  toggleModals: () => void;
};

function SignUpModal({
  isOpen,
  toggleSignUpModal,
  toggleModals,
}: SignUpModalProps) {
  const [isSigningUp, setSigningUp] = useState(false);

  // async function onSubmit(data: TSignUpData) {
  //   setSigningUp(true);
  //   await dispatch(signUp(data));
  //   toggleSignUpModal();
  //   setSigningUp(false);
  // }

  return (
    <Dialog open={isOpen} onOpenChange={toggleSignUpModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Реєстрація</DialogTitle>
        </DialogHeader>

        <form className="space-y-4 mt-4">
          <Input name="name" type="text" placeholder="Ім'я..." />
          <Input name="surname" type="text" placeholder="Прізвище..." />
          <Input name="email" type="email" placeholder="Е-мейл..." />
          <Input name="password" type="password" placeholder="Пароль..." />

          <div className="pt-2">
            <Button type="submit" className="w-full" disabled={isSigningUp}>
              Зареєструватись
            </Button>
          </div>

          <p className="text-center">
            Уже є аккаунт?{" "}
            <Link
              href="?login=true"
              className="underline"
              onClick={toggleModals}
            >
              Увійти
            </Link>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default SignUpModal;
