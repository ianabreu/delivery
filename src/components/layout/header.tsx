"use client";

import { Separator } from "../ui/separator";
import Link from "next/link";
import Logo from "../ui/logo";
import Sidebar from "./sidebar";
import SidebarLink from "../ui/sidebar-link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-3 bg-primary">
      <Sidebar header="Menu">
        <SidebarLink href="/" icon="menu">
          Cardápio
        </SidebarLink>
        <Separator />
        <SidebarLink href="/pedidos" icon="order">
          Pedidos
        </SidebarLink>
        <Separator />
        <SidebarLink href="/enderecos" icon="address">
          Meus Endereços
        </SidebarLink>
        <Separator />
      </Sidebar>

      <Link href={"/"}>
        <Logo />
      </Link>

      <Sidebar icon="cart" side="right"></Sidebar>
    </header>
  );
};

export default Header;
