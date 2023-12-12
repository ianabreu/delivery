import { ReactNode } from "react";
import { Button } from "../ui/button";
import { SheetClose } from "../ui/sheet";
import Link from "next/link";
import { SIDEBAR_ICON } from "@/lib/constants/Icons";

interface SidebarLinkProps {
  children: ReactNode;
  icon?: keyof typeof SIDEBAR_ICON;
  href?: string;
  onClick?: () => void;
}

const SidebarLink = ({
  children,
  icon,
  href = "/",
  onClick,
}: SidebarLinkProps) => {
  return (
    <SheetClose asChild>
      <Link href={href}>
        <Button
          variant="ghost"
          className="w-full justify-start gap-2"
          onClick={onClick}
        >
          {icon && SIDEBAR_ICON[icon]}
          {children}
        </Button>
      </Link>
    </SheetClose>
  );
};

export default SidebarLink;
