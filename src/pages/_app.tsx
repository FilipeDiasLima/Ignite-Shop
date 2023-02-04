import { Header } from "@/components/Header";
import { SideBarCart } from "@/components/SideBarCart";
import { CartContextProvider } from "@/context/CartContext";
import { globalStyles } from "@/styles/global";
import { Container } from "@/styles/pages/app";
import type { AppProps } from "next/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <SideBarCart />
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  );
}
