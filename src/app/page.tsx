import { Button } from "@/components/ui/button";
import { LockIcon, RepeatIcon, UserIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroPage = () => {
  return (
    <div className="flex flex-col">
      <section className="mb-40">
        <nav
          className="relative flex w-full items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30  lg:flex-wrap lg:justify-start"
          data-te-navbar-ref
        >
          <div className="flex w-full flex-wrap items-center justify-between px-6">
            <div className="flex items-center">
              <button
                className="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button"
                data-te-collapse-init
                data-te-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="[&>svg]:w-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              <a className="text-primary dark:text-primary-400" href="#!">
                <span className="[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <div
              className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContentY"
            >
              <Image
                alt="logo"
                src={"/unex-logo.png"}
                width={100}
                height={100}
              />
            </div>
            <div className="my-1 flex items-center lg:my-0 lg:ml-auto space-x-4">
              <Link href={"/login"}>
                <Button variant="outline" type="submit" className="">
                  Login
                </Button>
              </Link>
              <Link href={"/login"}>
                <Button
                  variant="outline"
                  type="submit"
                  className="bg-[#7e22ce]"
                >
                  Registrar-se
                </Button>
              </Link>
            </div>
          </div>
        </nav>
        <div className="px-6 py-12 text-center md:px-12 lg:text-left">
          <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
            <div className="grid items-center lg:grid-cols-2">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                  <h1 className="mt-2 mb-16 text-4xl font-bold tracking-tight">
                    Mantenha todas as suas senhas seguras em
                    <br />
                    <span className="text-primary"> um único lugar</span>
                  </h1>
                  <Link href={"/login"}>
                    <Button variant="secondary">Começar agora!</Button>
                  </Link>
                  <a
                    className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
                    role="button"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <Image
                  src="/091ea98a3c3593b75f8296f85adaa36a_XL.jpg"
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20 max-w-[450px] max-h-[450px]"
                  alt="background"
                  width={450}
                  height={450}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">
            Por que é essencial gerenciar suas senhas com eficácia?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <RepeatIcon className="h-8 w-8 mx-auto mb-4" />
              <p className="text-4xl font-bold">81%</p>
              <p>
                dos usuários reutilizam suas senhas em várias contas, o que
                aumenta o risco de ataques
              </p>
            </div>
            <div>
              <LockIcon className="h-8 w-8 mx-auto mb-4" />
              <p className="text-4xl font-bold">63%</p>
              <p>das violações de dados são causadas por senhas fracas</p>
            </div>
            <div>
              <UsersIcon className="h-8 w-8 mx-auto mb-4" />
              <p className="text-4xl font-bold">75%</p>
              <p>
                das pessoas afirmam que usam apenas a memória para guardar suas
                senhas
              </p>
            </div>
            <div>
              <UserIcon className="h-8 w-8 mx-auto mb-4" />
              <p className="text-4xl font-bold">25%</p>
              <p>
                admitem que usam datas de nascimento e/ou nomes de familiares na
                composição de suas senhas
              </p>
            </div>
          </div>
          <Link href={"/login"}>
            <Button className="mt-12 bg-[#7e22ce] hover:bg-[#7e22ce] text-white font-bold py-3 px-8 rounded">
              Proteja suas senhas agora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
