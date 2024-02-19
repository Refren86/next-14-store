import Link from "next/link";

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
      endpoint: "about-us",
    },
    {
      title: "Контакти",
      endpoint: "contact-us",
    },

    {
      title: "Доставка і оплата",
      endpoint: "payment-and-delivery",
    },
  ];

  return (
    <div>
      <div className="bg-secondary p-4 mt-12">
        <div className="max-w-[1600px] mx-auto flex justify-center items-center">
          <h4 className="text-xl font-semibold">Підпишіться на оновлення:</h4>
          <Input placeholder="Е-Мейл" className="w-56 ml-12 mr-2" />
          <Button>Підписатись</Button>
        </div>
      </div>

      <div className="bg-black text-secondary">
        <div className="max-w-[1600px] mx-auto px-4 py-8 flex justify-between">
          {/* TODO: on left goes logo with brief description; add "about us" section; add social medias to contacts */}
          <div className="pr-4">
            <Link href="/" className="inline-block mb-4">
              <Logo fill="white" className="w-[200px] h-8" />
            </Link>

            <p>Лише якісний та стильний одяг з вишивкою за доступною ціною</p>
          </div>

          <div className="flex gap-x-24">
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
                    href={`/categories/${info.endpoint}`}
                    className="hover:text-primary transition-text duration-300"
                  >
                    {info.title}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">Контакти</h3>

              <div className="flex flex-col gap-y-2">
                <div>
                  <p className="font-semibold">Телефон:</p>
                  <a
                    href="tel:+1234567890"
                    className="hover:text-primary transition-text duration-300"
                  >
                    +1234567890
                  </a>
                </div>
                <div>
                  <p className="font-semibold">Е-Мейл:</p>
                  <a
                    href="mailto:example@gmail.com"
                    className="hover:text-primary transition-text duration-300"
                  >
                    example@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold">Графік роботи:</p>
                  <p>Пн-Пт: 10:00-21:00</p>
                  <p>Суб-Нед: 10:00-20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
