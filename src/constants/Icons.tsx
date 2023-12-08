import {
  BookUserIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  ScrollTextIcon,
  ShoppingBasketIcon,
  UtensilsIcon,
} from "lucide-react";

export const SIDEBAR_ICON = {
  menu: <UtensilsIcon size={16} />,
  order: <ScrollTextIcon size={16} />,
  address: <BookUserIcon size={16} />,
  login: <LogInIcon size={16} />,
  logout: <LogOutIcon size={16} />,
};

export const MENU_ICON = {
  drawer: <MenuIcon />,
  cart: <ShoppingBasketIcon />,
};
