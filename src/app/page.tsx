// import Image from "next/image";
// "use client" o use client que faz o javascript funcionar.

import { Button } from "@/_components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-red-500 pb-3">Olá Mundo!!</h1>
      <Button className="px-3 py-2 bg-black text-white rounded-none">Clique aqui!</Button>
    </div>
  );
}
