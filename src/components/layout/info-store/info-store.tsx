import { ICONS } from "@/lib/constants/Icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import InfoBadge from "./info-badge-options";
import InfoSection from "./info-section";
import Link from "next/link";

const InfoStore = () => {
  const opening_hours = [
    { day: "DOM", start: "18:00", end: "23:30", active: true },
    { day: "SEG", start: "18:00", end: "23:30", active: true },
    { day: "TER", start: "18:00", end: "23:30", active: false },
    { day: "QUA", start: "18:00", end: "23:00", active: true },
    { day: "QUI", start: "18:00", end: "23:00", active: true },
    { day: "SEX", start: "18:00", end: "23:30", active: true },
    { day: "SÁB", start: "18:00", end: "23:30", active: true },
  ];
  const phones = [
    { id: "1", number: "999824116", ddd: "77", region: "+55" },
    { id: "2", number: "981207814", ddd: "77", region: "+55" },
  ];
  const delivery_options: {
    id: string;
    name: string;
    type: keyof typeof ICONS;
  }[] = [
    { id: "1", name: "Delivery", type: "delivery" },
    { id: "2", name: "Retirar na loja", type: "store" },
  ];
  const payment_methods: {
    id: string;
    name: string;
    type: keyof typeof ICONS;
  }[] = [
    { id: "1", name: "Dinheiro", type: "money" },
    { id: "2", name: "Cartão", type: "card" },
    { id: "3", name: "Pagamento Instantâneo (PIX)", type: "pix" },
  ];

  return (
    <Dialog>
      <DialogTrigger className="absolute right-0 bottom-0 p-2 m-2 text-background">
        {ICONS["info"]}
      </DialogTrigger>
      <DialogContent className="w-[90%] h-[90%] rounded-md">
        <ScrollArea>
          <InfoSection title="Horários de Funcionamento">
            {opening_hours.map(({ day, end, start, active }) => (
              <div key={day} className="flex gap-2 text-xs">
                <span className="w-10 text-right font-bold">{day}</span>
                <div>{active ? `${start} às ${end}` : "Fechado"}</div>
              </div>
            ))}
          </InfoSection>
          <InfoSection title="Telefones">
            {phones.map(({ id, region, ddd, number }) => (
              <Link
                key={id}
                href={`tel:0${ddd}${number}`}
                className="text-blue-500 hover:text-blue-700"
              >
                {`${region}${ddd}${number}`}
              </Link>
            ))}
          </InfoSection>

          <InfoSection title="Opções de Entrega">
            <div className="flex gap-2">
              {delivery_options.map(({ name, type, id }) => (
                <InfoBadge key={id} title={name} icon={type} />
              ))}
            </div>
          </InfoSection>

          <InfoSection title="Pagamento na Entrega">
            {payment_methods.map(({ id, name, type }) => (
              <InfoBadge key={id} title={name} icon={type} />
            ))}
          </InfoSection>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default InfoStore;
