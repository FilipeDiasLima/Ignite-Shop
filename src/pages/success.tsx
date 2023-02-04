import { useCart } from "@/hooks/useCart";
import { stripe } from "@/lib/stripe";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Stripe from "stripe";
import {
  ImageContainer,
  ProductsImages,
  SuccessContainer,
} from "../styles/pages/success";

interface Props {
  customerName: string;
  productsImage: string[];
}

export default function Success({ customerName, productsImage }: Props) {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <>
      <Head>
        <title>Parabéns | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ProductsImages>
          {productsImage.map((image) => (
            <ImageContainer>
              <Image src={image} width={120} height={120} alt="" />
            </ImageContainer>
          ))}
        </ProductsImages>

        <h1>Compra efetuada</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, sua{" "}
          <strong>
            compra de{" "}
            {productsImage.length > 1
              ? productsImage.length + " camisetas"
              : productsImage.length + " camiseta"}
          </strong>{" "}
          já está a caminho da sua casa.
        </p>
        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  params,
}) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  let productsImage: string[] = [];

  const customerName = session.customer_details?.name;
  const products = session.line_items?.data[0].price?.product as Stripe.Product;

  session.line_items?.data.map((item) => {
    productsImage.push((item.price?.product as Stripe.Product).images[0]);
  });

  return {
    props: {
      customerName,
      productsImage,
    },
  };
};
