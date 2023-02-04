import { useCart } from "@/hooks/useCart";
import {
  BadgeNotification,
  ButtonHeader,
  HeaderContainer,
} from "@/styles/components/header";
import Image from "next/image";
import Link from "next/link";

import { BagSvg } from "./BagSvg";
import { LogoSvg } from "./LogoSvg";

export const Header = () => {
  const { toggleOpenCart, cartProducts } = useCart();

  return (
    <HeaderContainer>
      <Link href="/">
        <LogoSvg />
      </Link>
      <ButtonHeader type="button" onClick={toggleOpenCart}>
        {cartProducts.length > 0 && (
          <BadgeNotification>{cartProducts.length}</BadgeNotification>
        )}
        <BagSvg />
      </ButtonHeader>
    </HeaderContainer>
  );
};
