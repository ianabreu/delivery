"use client";

import { Separator } from "../ui/separator";
import Link from "next/link";
import Logo from "../ui/logo";
import Sidebar from "./sidebar";
import SidebarLink from "../ui/sidebar-link";

const Header = () => {
  return (
    <header className="bg-primary  p-3 ">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
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
      </div>
    </header>
  );
};

export default Header;
