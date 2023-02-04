import Image from "next/image";

import {
  CartAmountInfo,
  CartButton,
  CartContainer,
  CartInfo,
  CartTotalInfo,
  CloseButton,
  ImageContainer,
  ProductCart,
  ProductContainer,
  ProductInfo,
} from "@/styles/components/sidebarCart";

import { useCart } from "@/hooks/useCart";
import { CloseSvg } from "./CloseSvg";
import { useState } from "react";
import axios from "axios";

export const SideBarCart = () => {
  const {
    toggleOpenCart,
    isOpenCart,
    totalPrice,
    cartProducts,
    handleRemoveOneFromCart,
  } = useCart();

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleBuyProduct() {
    setIsCreatingCheckoutSession(true);
    try {
      const lineItems = cartProducts.map((item) => {
        return {
          price: item.defaultPriceId,
          quantity: 1,
        };
      });

      const response = await axios.post("/api/checkout", {
        lineItems: JSON.stringify(lineItems),
      });

      const { checkoutUrl } = response.data;

      // rota interna -> push
      // rota externa,
      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <CartContainer fadeIn={isOpenCart}>
      <CloseButton type="button" onClick={toggleOpenCart}>
        <CloseSvg />
      </CloseButton>
      <strong>Sacola de compras</strong>

      <ProductContainer
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "scrollbarColor",
            borderRadius: "24px",
          },
        }}
      >
        {cartProducts.map((item) => (
          <ProductCart key={item.id}>
            <ImageContainer>
              <Image src={item.imageUrl} width={95} height={95} alt="" />
            </ImageContainer>
            <ProductInfo>
              <p>{item.name}</p>
              <strong>{item.price}</strong>
              <button
                type="button"
                onClick={() => handleRemoveOneFromCart(item.id)}
              >
                Remover
              </button>
            </ProductInfo>
          </ProductCart>
        ))}
      </ProductContainer>

      <CartInfo>
        <CartAmountInfo>
          <p>Quantidade</p>
          <p>
            {cartProducts.length > 1
              ? cartProducts.length + " itens"
              : cartProducts.length + " item"}
          </p>
        </CartAmountInfo>
        <CartTotalInfo>
          <p>Valor total</p>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(totalPrice! / 100)}
          </strong>
        </CartTotalInfo>
        <CartButton
          disabled={isCreatingCheckoutSession}
          type="button"
          onClick={handleBuyProduct}
        >
          Finalizar compra
        </CartButton>
      </CartInfo>
    </CartContainer>
  );
};
