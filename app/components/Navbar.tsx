"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import LoginModal from "@/app/components/LoginModal";
import SignUpModal from "@/app/components/SignUpModal";
import { Button } from "@/app/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/app/components/ui/DropdownMenu";
import { useMounted } from "../hooks/useMounted";

const cartItems = [
  {
    id: 1,
    title: "Жовте худі",
    count: 1,
    price: 400,
    image: "/images/categories/hoodies.jpg",
  },
];

function Navbar() {
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

  return (
    <div>
      <div className="bg-primary h-8 flex justify-center items-center">
        <p>
          Зареєструйтесь та отримайте <b>знижку 20%</b> на перше замовлення.{" "}
          <Link href="?sign-up=true" className="underline">
            <b>Зареєструватись</b>
          </Link>
        </p>
      </div>
      <nav className="bg-secondary h-16">
        <div className="flex justify-between items-center max-w-[1600px] mx-auto px-4 h-full">
          {/* Left */}
          <Link href="/">
            <Image
              src="/icons/logo-white.svg"
              alt="logo"
              width={200}
              height={60}
            />
          </Link>

          {/* Right */}
          <div className="flex items-center gap-x-4">
            <div className="flex justify-center items-center min-w-[48px] h-12 hover:bg-primary/40 rounded-full cursor-pointer transition-background duration-300">
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full h-full">
                  <div className="relative flex justify-center items-center">
                    <ShoppingCart size={28} />

                    <span className="flex justify-center items-center absolute -right-0 -top-1 rounded-full bg-destructive text-foreground text-xs font-semibold w-5 h-5">
                      1
                    </span>
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  {cartItems.map((item) => {
                    return (
                      <DropdownMenuItem key={item.id}>
                        <div className="flex items-center gap-x-16 p-2">
                          <div className="flex">
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={60}
                              height={80}
                            />

                            <div className="pl-4">
                              <p className="text-base font-medium">
                                {item.title}
                              </p>
                              <p>Кількість: {item.count}</p>
                              <p>Ціна: {item.price * item.count}₴</p>
                            </div>
                          </div>

                          <Button variant="destructive" size="sm">
                            <X size={18} />
                          </Button>
                        </div>
                      </DropdownMenuItem>
                    );
                  })}

                  <DropdownMenuItem>
                    <Link href="/cart" className="w-full">
                      <Button className="w-full">Придбати товар</Button>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex justify-center items-center min-w-[48px] h-12 hover:bg-primary/40 rounded-full cursor-pointer transition-background duration-300">
              {/* {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-full h-full font-semibold">
                    {user.name.charAt(0)}. {user.surname.charAt(0)}.
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuLabel>{t("navbar.account")}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>{t("navbar.settings")}</DropdownMenuItem>
                    <DropdownMenuItem>
                      {t("navbar.shoppingHistory")}
                    </DropdownMenuItem>
                    <DropdownMenuItem>{t("navbar.logOut")}</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                // Add here code from below when user will be implemented
              )} */}
              <Link href="?login=true">
                <User size={28} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {isMounted && (
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
      )}
    </div>
  );
}

export default Navbar;
