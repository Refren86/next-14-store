"use client";

import Link from "next/link";

import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/Dialog";

type LoginModalProps = {
  isOpen: boolean;
  toggleLoginModal: () => void;
  toggleModals: () => void;
};

function LoginModal({
  isOpen,
  toggleLoginModal,
  toggleModals,
}: LoginModalProps) {
  // async function onSubmit(data) {
  //   setLoggingIn(true);
  //   // await dispatch(login(data));
  //   toggleLoginModal();
  //   setLoggingIn(false);
  // }

  return (
    <Dialog open={isOpen} onOpenChange={toggleLoginModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Логін</DialogTitle>
        </DialogHeader>

        <form className="space-y-4 mt-4">
          <Input name="email" type="email" placeholder="Е-мейл..." />

          <Input name="password" type="password" placeholder="Пароль..." />

          <div className="pt-2">
            <Button type="submit" className="w-full">
              Увійти
            </Button>
          </div>

          <p className="text-center">
            Немає аккаунта?{" "}
            <Link
              href="?sign-up=true"
              className="underline"
              onClick={toggleModals}
            >
              Створити аккаунт
            </Link>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal;
