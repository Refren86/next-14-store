import Link from "next/link";

import Wrapper from "./Wrapper";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { Logo } from "@/app/components/icons/Logo";

function Footer() {
  const categories = [
    {
      title: "Худі",
      endpoint: "hoodies",
    },
    {
      title: "Футболки",
      endpoint: "shirts",
    },
    {
      title: "Шапки",
      endpoint: "hats",
    },
    {
      title: "Чоловіче",
      endpoint: "men",
    },
    {
      title: "Жіноче",
      endpoint: "women",
    },
  ];

  const information = [
    {
      title: "Про нас",
      endpoint: "/about-us",
    },
    {
      title: "Контакти",
      endpoint: "/contact-us",
    },

    {
      title: "Доставка і оплата",
      endpoint: "/payment-and-delivery",
    },
  ];

  return (
    <div>
      <div className="bg-secondary py-4">
        <Wrapper>
          <div className="flex flex-col md:flex-row md:items-center gap-y-5 justify-center">
            <h4 className="text-lg md:text-xl font-semibold">
              Підпишіться на оновлення:
            </h4>
            <Input placeholder="Е-Мейл" className="md:w-56 md:ml-12 md:mr-2" />
            <Button>Підписатись</Button>
          </div>
        </Wrapper>
      </div>

      <div className="bg-black text-secondary">
        <Wrapper>
          <div className="py-8 flex flex-col lg:flex-row gap-y-12 justify-between">
            {/* TODO: on left goes logo with brief description; add "about us" section; add social medias to contacts */}
            <div className="pr-4">
              <Link href="/" className="inline-block mb-4">
                <Logo className="w-[200px] h-8 fill-white duration-300 hover:fill-primary" />
              </Link>

              <p>Лише якісний та стильний одяг з вишивкою за доступною ціною</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-x-24 gap-y-12">
              <div>
                <h3 className="font-bold text-xl mb-4">Категорії</h3>

                <nav className="flex flex-col gap-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.title}
                      href={`/categories/${category.endpoint}`}
                      className="hover:text-primary transition-text duration-300"
                    >
                      {category.title}
                    </Link>
                  ))}
                </nav>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4">Інформація</h3>

                <nav className="flex flex-col gap-y-2">
                  {information.map((info) => (
                    <Link
                      key={info.title}
                      href={info.endpoint}
                      className="hover:text-primary transition-text duration-300"
                    >
                      {info.title}
                    </Link>
                  ))}
                </nav>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4">Контакти</h3>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Телефон:</p>
                    <a
                      href="tel:+1234567890"
                      className="hover:text-primary transition-text duration-300"
                    >
                      +1234567890
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Е-Мейл:</p>
                    <a
                      href="mailto:example@gmail.com"
                      className="hover:text-primary transition-text duration-300"
                    >
                      example@gmail.com
                    </a>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold">Графік роботи:</p>
                    <p>Пн - Пт: 10:00 - 21:00</p>
                    <p>Суб - Нед: 10:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

export default Footer;
