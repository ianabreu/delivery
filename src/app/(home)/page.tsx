import Header from "@/components/layout/header";
import InfoStore from "@/components/layout/info-store/info-store";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl w-full mx-auto flex-1">
        <section className="bg-background flex flex-col">
          <div className="relative">
            <Image
              src={"/cover.png"}
              alt="Imagem do Estabelecimento"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-20 object-cover"
            />
            <InfoStore />
          </div>

          <p>Entrega estimada: 70 a 80 minutos</p>
        </section>
      </main>
      <footer className="flex flex-col items-center justify-center h-10">
        <p className="text-xs text-gray-500">Pede Fácil</p>
        <p className="text-xs text-gray-500">Todos os direitos reservados</p>
      </footer>
    </>
  );
}
