import SignUpForm from "./SignUpForm";
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
  return (
    <Dialog open={isOpen} onOpenChange={toggleSignUpModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Реєстрація</DialogTitle>
        </DialogHeader>

        <SignUpForm toggleModals={toggleModals} />
      </DialogContent>
    </Dialog>
  );
}

export default SignUpModal;
