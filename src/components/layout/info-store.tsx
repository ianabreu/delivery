import { ICONS } from "@/constants/Icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";

import { Badge } from "../ui/badge";

const InfoStore = () => {
  const hours = [
    { day: "DOM", start: "18:00", end: "23:30" },
    { day: "SEG", start: "18:00", end: "23:30" },
    { day: "TER", start: "18:00", end: "23:30" },
    { day: "QUA", start: "18:00", end: "23:00" },
    { day: "QUI", start: "18:00", end: "23:00" },
    { day: "SEX", start: "18:00", end: "23:30" },
    { day: "SÁB", start: "18:00", end: "23:30" },
  ];
  return (
    <Dialog>
      <DialogTrigger>{ICONS["info"]}</DialogTrigger>
      <DialogHeader>
        <DialogContent className="w-[90%]">
          <DialogDescription>
            <h6 className="text-xs font-bold">Horários de Funcionamento</h6>
            {hours.map((day, index) => (
              <div key={index} className="flex gap-2 text-xs p-1">
                <span className="w-10 text-right font-bold">{day.day}</span>
                <div>
                  {day.start} às {day.end}
                </div>
              </div>
            ))}

            <div className="flex flex-col gap-2 mb-2">
              <h6 className="text-xs font-bold">Telefone</h6>
              <span className="">77 99982-4116</span>
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <h6 className="text-xs font-bold">Opções de Entrega</h6>
              <div className="flex gap-2">
                <Badge
                  className="w-fit border-2 bg-gray-200 gap-1 text-background-foreground text-xs capitalize"
                  variant={"outline"}
                >
                  {ICONS["delivery"]} Delivery
                </Badge>
                <Badge
                  className="w-fit border-2 bg-gray-200 gap-1 text-background-foreground text-xs capitalize"
                  variant={"outline"}
                >
                  {ICONS["store"]} Retirar na Loja
                </Badge>
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-2">
              <h6 className="text-xs font-bold">Pagamento na Entrega</h6>
              <Badge
                className="w-fit border-2 bg-gray-200 gap-1 text-background-foreground text-xs capitalize"
                variant={"outline"}
              >
                {ICONS["money"]} Dinheiro
              </Badge>
              <Badge
                className="w-fit border-2 bg-gray-200 gap-1 text-background-foreground text-xs capitalize"
                variant={"outline"}
              >
                {ICONS["card"]} Cartão
              </Badge>
              <Badge
                className="w-fit border-2 bg-gray-200 gap-1 text-background-foreground text-xs capitalize"
                variant={"outline"}
              >
                {ICONS["pix"]} Pagamento Instantâneo (PIX)
              </Badge>
            </div>
          </DialogDescription>
        </DialogContent>
      </DialogHeader>
    </Dialog>
  );
};

export default InfoStore;
