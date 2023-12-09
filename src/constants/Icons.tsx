import {
  BookUserIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  ScrollTextIcon,
  ShoppingBasketIcon,
  UtensilsIcon,
  InfoIcon,
  BikeIcon,
  CreditCardIcon,
  CircleDollarSignIcon,
  BanknoteIcon,
  StoreIcon,
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

export const ICONS = {
  info: <InfoIcon size={16} />,
  delivery: <BikeIcon size={16} />,
  store: <StoreIcon size={16} />,
  card: <CreditCardIcon size={16} />,
  money: <BanknoteIcon size={16} />,
  pix: <CircleDollarSignIcon size={16} />,
};
