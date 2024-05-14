"use client";
import React, { useEffect, useState } from "react";
import { Layout, Menu, theme } from "antd";
import {
  CheckIcon,
  ChevronRightIcon,
  CopyIcon,
  CreditCardIcon,
  Landmark,
  Lock,
  PlusIcon,
  RefreshCwIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
  Wifi,
} from "lucide-react";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import { CardContent, Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
const { Header, Content, Footer, Sider } = Layout;
const icons = [Lock, CreditCardIcon, Landmark, Wifi];
const labels = [
  "Senhas",
  "Cartões de Pagamento",
  "Contas Bancarias",
  "Senhas de Wifi",
];

const items = icons.map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: labels[index],
}));
const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [passwordLength, setPasswordLength] = useState<number[]>([12]);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [easyToPronounce, setEasyToPronounce] = useState(false);
  const [easyToRead, setEasyToRead] = useState(false);

  useEffect(() => {
    generateNewPassword();
  }, [passwordLength, easyToPronounce, easyToRead]);

  const handleSliderChange = (value: number[]) => {
    setPasswordLength(value);
  };

  const handleInputChange = (value: number) => {
    const length = Math.max(8, Math.min(20, value));
    setPasswordLength([length]);
  };

  const generatePassword = (
    length: any,
    easyToPronounce: any,
    easyToRead: any
  ) => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*?";

    let allowedChars = "";
    if (easyToPronounce) {
      allowedChars += "aeiouAEIOU";
    } else {
      allowedChars += uppercaseChars + lowercaseChars;
    }

    if (easyToRead) {
      allowedChars += "23456789";
    } else {
      allowedChars += numbers + specialChars;
    }

    let password = "";
    let hasSpecialChar = false;
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * allowedChars.length);
      if (easyToPronounce && !hasSpecialChar && i === length - 1) {
        const specialIndex = Math.floor(Math.random() * specialChars.length);
        password += specialChars[specialIndex];
        hasSpecialChar = true;
      } else {
        password += allowedChars[randomIndex];
      }
    }

    return password;
  };
  const generateNewPassword = () => {
    const newPassword = generatePassword(
      passwordLength,
      easyToPronounce,
      easyToRead
    );
    setPassword(newPassword);
    setCopied(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <Layout className="h-full bg-[#7e22ce]">
      <Sider
        width={223}
        theme="dark"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="flex justify-center w-full p-6 bg-slate-900">
          <Image alt="logo" src={"/unex-logo.png"} width={100} height={100} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          className="space-y-3 "
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout className="bg-gray-950/90">
        <Header style={{ padding: 0 }} className="bg-gray-950/60">
          <header className="sticky top-0 mt-3 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <div className="relative ml-auto flex-1 md:grow-0">
              <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                className="w-full rounded-lg bg-background text-white pl-8 md:w-[200px] lg:w-[336px]"
                placeholder="Pesquisar Seção..."
                type="search"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="overflow-hidden rounded-full"
                  size="icon"
                  variant="outline"
                >
                  <Image
                    alt="Avatar"
                    className="overflow-hidden rounded-full"
                    height={25}
                    src="/User-avatar.svg.png"
                    style={{
                      aspectRatio: "36/36",
                      objectFit: "cover",
                    }}
                    width={25}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Meu Perfil</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuItem>Suporte</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
        </Header>
        <Content style={{ margin: "24px" }}>
          <div
            style={{
              minHeight: 360,
            }}
            className="h-full bg-gray-900/85 max-h-[534px] overflow-auto rounded-[30px]"
          >
            <>
              <header className="flex items-center justify-between bg-gray-100 px-6 py-4 rounded-t-[30px] dark:bg-gray-800">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Todas as senhas
                </h1>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="ghost">
                    <SearchIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <SettingsIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <PlusIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>Personalize sua senha</DialogTitle>
                        <DialogDescription>
                          Ajuste as configurações abaixo para gerar uma senha
                          personalizada.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="flex items-center gap-4 justify-around">
                          <Label htmlFor="site-name">Nome do site</Label>
                          <Input
                            id="site-name"
                            className="max-w-[300px]"
                            placeholder="Digite o nome do site"
                            type="text"
                          />
                        </div>
                        <div className="flex items-center gap-4 justify-around">
                          <Label htmlFor="site-url">URL do site</Label>
                          <Input
                            id="site-url"
                            className="max-w-[300px]"
                            placeholder="Digite a URL do site"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 pb-4 pt-1">
                        <div className="flex items-center gap-4">
                          <Label htmlFor="password-length">
                            Comprimento da senha
                          </Label>
                          <Input
                            className="w-20"
                            value={passwordLength[0]}
                            onChange={(e) =>
                              handleInputChange(Number(e.target.value))
                            }
                            id="password-length"
                            max="20"
                            min="8"
                            type="number"
                          />
                          <Slider
                            className="flex-1"
                            value={passwordLength}
                            onValueChange={handleSliderChange}
                            id="password-length-slider"
                            max={20}
                            min={8}
                            step={1}
                          />
                        </div>
                        <div className="items-center gap-4 hidden">
                          <Checkbox
                            id="easy-to-pronounce"
                            checked={easyToPronounce}
                            onClick={() => setEasyToPronounce(!easyToPronounce)}
                          />
                          <Label htmlFor="easy-to-pronounce">
                            Evitar Caracteres Especiais
                          </Label>
                        </div>
                        <div className="flex items-center gap-4">
                          <Checkbox
                            id="easy-to-read"
                            checked={easyToRead}
                            onClick={() => setEasyToRead(!easyToRead)}
                          />
                          <Label htmlFor="easy-to-read">
                            Evitar caracteres especiais
                          </Label>
                        </div>
                      </div>
                      <DialogFooter className="flex flex-col">
                        <div className="flex items-center gap-4">
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={handleCopy}
                          >
                            {copied ? (
                              <CheckIcon className="h-5 w-5" />
                            ) : (
                              <CopyIcon className="h-5 w-5" />
                            )}
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={generateNewPassword}
                          >
                            <RefreshCwIcon className="h-5 w-5" />
                          </Button>
                          <Input
                            className="flex-1"
                            value={password}
                            readOnly
                            type="text"
                          />
                        </div>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </header>
              <div className="px-6 py-8">
                <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                  <CollapsibleTrigger className="flex items-center justify-between gap-4 px-6 py-4 [&[data-state=open]>svg]:rotate-90">
                    <div className="flex items-center gap-2">
                      <StarIcon className="h-5 w-5 text-primary" />
                      <span className="font-medium text-gray-900 dark:text-white">
                        Favoritos (7)
                      </span>
                    </div>
                    <ChevronRightIcon className="h-5 w-5 text-gray-700 dark:text-gray-200 transition-transform" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-3">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center gap-2 p-4 cursor-pointer hover:opacity-85">
                        <div className="w-full rounded-lg aspect-square flex-1 flex items-center">
                          <img
                            alt="Placeholder"
                            className="w-full rounded-lg object-fill"
                            height={80}
                            src="/Google-logo-PNG-Picture.png"
                            width={80}
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="font-medium">Google</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            google.com
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center gap-2 p-4 cursor-pointer hover:opacity-85">
                        <img
                          alt="Placeholder"
                          className="aspect-square w-full rounded-lg object-fill"
                          height={80}
                          src="/facebook.svg"
                          width={80}
                        />
                        <div className="text-center">
                          <h3 className="font-medium">Facebook</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            facebook.com
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center gap-2 p-4 cursor-pointer hover:opacity-85">
                        <div className="w-full rounded-lg aspect-square flex-1 flex items-center">
                          <img
                            alt="Placeholder"
                            className="w-full rounded-lg object-fill"
                            height={80}
                            src="Twitter_logo.svg.png"
                            width={80}
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="font-medium">Twitter</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            twitter.com
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                  <CollapsibleTrigger className="flex items-center justify-between gap-4 px-6 py-4 [&[data-state=open]>svg]:rotate-90">
                    <span className="font-medium text-gray-900 dark:text-white">
                      Sites & Aplicativos (3)
                    </span>
                    <ChevronRightIcon className="h-5 w-5 text-gray-700 dark:text-gray-200 transition-transform" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-3">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center gap-2 p-4 cursor-pointer hover:opacity-85">
                        <div className="w-full rounded-lg aspect-square flex-1 flex items-center">
                          <img
                            alt="Placeholder"
                            className="w-full rounded-lg object-cover"
                            height={80}
                            src="/Amazon_logo.svg"
                            width={80}
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="font-medium">Amazon</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            amazon.com
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center gap-2 p-4 cursor-pointer hover:opacity-85">
                        <div className="w-full rounded-lg aspect-square flex-1 flex items-center">
                          <img
                            alt="Placeholder"
                            className="w-full rounded-lg object-fill"
                            height={80}
                            src="/Netflix_2015_logo.svg.png"
                            width={80}
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="font-medium">Netflix</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            netflix.com
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center gap-2 p-4 cursor-pointer hover:opacity-85">
                        <div className="w-full rounded-lg aspect-square flex-1 flex items-center">
                          <img
                            alt="Placeholder"
                            className="w-full rounded-lg object-fill"
                            height={80}
                            src="/github_PNG23.png"
                            width={80}
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="font-medium">GitHub</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            github.com
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </>
          </div>
        </Content>
        <Footer
          style={{ textAlign: "center" }}
          className="bg-gray-950/60 text-white"
        >
          Unex ©{new Date().getFullYear()} Criado por Grupo 1
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
