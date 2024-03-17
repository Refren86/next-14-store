"use client";

import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart, User, X } from "lucide-react";

import Wrapper from "./Wrapper";
import NavbarModals from "@/app/components/NavbarModals";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/app/components/ui/DropdownMenu";
import { Button } from "@/app/components/ui/Button";
import { Logo } from "@/app/components/icons/Logo";
import { createClient } from "../lib/supabase/client";
import { useUserStore } from "../hooks/store/useUserStore";

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
  const router = useRouter();
  const userData = useUserStore((state: any) => state);

  async function logout() {
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
      router.refresh();
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <div>
      <div className="bg-primary flex justify-center items-center">
        <Wrapper>
          <p className="font-semibold text-sm md:text-lg text-center text-white py-2 selection:bg-black">
            Зареєструйтесь та отримайте <b>знижку 20%</b> на перше замовлення.{" "}
            <Link href="?sign-up=true" className="underline">
              <b>Зареєструватись</b>
            </Link>
          </p>
        </Wrapper>
      </div>

      <nav className="bg-secondary py-4">
        <Wrapper>
          <div className="flex justify-between items-center h-full">
            {/* Left */}
            <Link href="/" className="text-black">
              <Logo className="w-[200px] h-8 duration-300 hover:fill-primary" />
            </Link>

            {/* Right */}
            <div className="flex items-center gap-x-4">
              <div className="flex justify-center items-center min-w-[48px] h-12 hover:bg-primary/70 rounded-full cursor-pointer transition-background duration-300">
                <DropdownMenu>
                  <DropdownMenuTrigger className="group w-full h-full">
                    <div className="relative flex justify-center items-center">
                      <ShoppingCart size={28} className="group-hover:invert" />

                      <span className="flex justify-center items-center absolute -right-0 -top-1 rounded-full bg-destructive text-foreground text-xs font-semibold w-5 h-5 group-hover:text-white">
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

              <div className="group flex justify-center items-center min-w-[48px] h-12 hover:bg-primary/70 hover:text-white rounded-full cursor-pointer transition-background duration-300">
                {userData.user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="w-full h-full font-semibold">
                      {userData.user.user_metadata.first_name.charAt(0)}.{" "}
                      {userData.user.user_metadata.last_name.charAt(0)}.
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                      <DropdownMenuLabel>Мій профіль</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Налаштування</DropdownMenuItem>
                      <DropdownMenuItem>Мої покупки</DropdownMenuItem>
                      <DropdownMenuItem>
                        <button onClick={logout}>Вийти</button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href="?login=true">
                    <User size={28} className="group-hover:invert" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Wrapper>
      </nav>

      <Suspense fallback={<></>}>
        <NavbarModals />
      </Suspense>
    </div>
  );
}

export default Navbar;
