"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Logo from "@/components/ui/logo";
import Sidebar from "@/components/layout/sidebar";
import SidebarLink from "@/components/ui/sidebar-link";

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
