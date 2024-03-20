"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/Dialog";
import LoginForm from "./LoginForm";

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
  return (
    <Dialog open={isOpen} onOpenChange={toggleLoginModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Логін</DialogTitle>
        </DialogHeader>

        <LoginForm toggleModals={toggleModals} />
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal;
