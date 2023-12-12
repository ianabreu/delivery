import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode } from "react";
import { MENU_ICON } from "@/lib/constants/Icons";

interface SidebarProps {
  children?: ReactNode;
  side?: "left" | "right" | "bottom" | "top";
  icon?: keyof typeof MENU_ICON;
  header?: ReactNode;
}

const Sidebar = ({
  children,
  side = "left",
  icon = "drawer",
  header,
}: SidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant={"default"}
          className="hover:bg-destructive"
        >
          {MENU_ICON[icon]}
        </Button>
      </SheetTrigger>
      <SheetContent side={side} className="flex h-full w-[90%] flex-col gap-2">
        {header && (
          <SheetHeader className="text-left text-lg font-bold">
            {header}
          </SheetHeader>
        )}
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
