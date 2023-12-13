import InfoStore from "@/components/layout/info-store/info-store";
import Image from "@/components/ui/image";
import { ICONS } from "@/lib/constants/Icons";

const InfoHeader = () => {
  return (
    <section className="bg-background flex flex-col shadow-sm shadow-stone-500">
      <div className="relative">
        <Image
          src={"/cover.png"}
          alt="Imagem do Estabelecimento"
          className="w-full h-20 object-cover"
        />
        <InfoStore />
      </div>
      <div className="flex flex-col items-center mt-[-40px]">
        <Image
          src={"/logo.png"}
          alt="logotipo quadrado"
          className="w-20 h-20 object-cover rounded-md shadow-stone-500 shadow-sm z-50"
        />
        <p className="text-xs my-2 flex gap-1">
          {ICONS["time"]}
          <span className="">Entrega estimada: 70 a 80 minutos</span>
        </p>
      </div>
    </section>
  );
};

export default InfoHeader;
