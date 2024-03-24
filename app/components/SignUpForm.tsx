import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import ButtonLoader from "./ui/ButtonLoader";
import { toast } from "../hooks/useToast";
import { signUpAction } from "../lib/actions";
import { TFormState, TSignUpFields } from "../types/forms";

type Props = {
  toggleModals: () => void;
};

const initialState: TFormState<TSignUpFields> = {
  success: false,
  message: "",
  errors: undefined,
  fieldValues: {
    email: "",
    password: "",
    name: "",
    surname: "",
  },
};

const SignUpForm = ({ toggleModals }: Props) => {
  const router = useRouter();

  const [formState, signUpDispatch] = useFormState(signUpAction, initialState);

  if (formState.success) {
    toast({
      title: formState.message,
    });

    router.push("/");
  }

  return (
    <form action={signUpDispatch} className="space-y-4 mt-4">
      <Input
        name="name"
        type="text"
        placeholder="Ім'я..."
        error={formState.errors?.name}
      />
      <Input
        name="surname"
        type="text"
        placeholder="Прізвище..."
        error={formState.errors?.surname}
      />
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

      <SignUpFormSubmitBtn />

      <p className="text-center">
        Уже є аккаунт?{" "}
        <Link href="?login=true" className="underline" onClick={toggleModals}>
          Увійти
        </Link>
      </p>
    </form>
  );
};

function SignUpFormSubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <div className="pt-2">
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? <ButtonLoader /> : "Створити аккаунт"}
      </Button>
    </div>
  );
}

export default SignUpForm;
