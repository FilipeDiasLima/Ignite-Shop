import { HeaderContainer } from "@/styles/components/header";
import Image from "next/image";

import logoSvg from "../assets/logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <Image src={logoSvg} alt="logo" />
    </HeaderContainer>
  );
};
