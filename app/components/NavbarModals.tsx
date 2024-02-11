import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useMounted } from "@/app/hooks/useMounted";
import LoginModal from "@/app/components/LoginModal";
import SignUpModal from "@/app/components/SignUpModal";

const NavbarModals = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const isMounted = useMounted();

  const params = new URLSearchParams(searchParams);

  const isLoginOpen = !!params.get("login");
  const isSignUpOpen = !!params.get("sign-up");

  function toggleLoginModal() {
    replace("/");
  }

  function toggleSignUpModal() {
    replace("/");
  }

  function toggleModals() {
    if (isLoginOpen) {
      params.delete("login");
      params.set("sign-up", "true");
    } else {
      params.delete("sign-up");
      params.set("login", "true");
    }
  }

  if (!isMounted) return null;

  return (
    <>
      <LoginModal
        isOpen={isLoginOpen}
        toggleLoginModal={toggleLoginModal}
        toggleModals={toggleModals}
      />
      <SignUpModal
        isOpen={isSignUpOpen}
        toggleSignUpModal={toggleSignUpModal}
        toggleModals={toggleModals}
      />
    </>
  );
};

export default NavbarModals;
