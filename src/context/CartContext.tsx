import { SideBarCart } from "@/components/SideBarCart";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  priceUnformatted: number;
  description: string;
  defaultPriceId: string;
}

type CartContextProviderProps = {
  children: ReactNode;
};

type CartContextDataProps = {
  isOpenCart: boolean;
  totalPrice: number;
  cartProducts: ProductProps[];
  toggleOpenCart(): void;
  clearCart(): void;
  handleRemoveOneFromCart(productId: string): void;
  handleAddOneToCart(product: ProductProps): void;
};

export const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps
);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [cartProducts, setCartProducts] = useState<ProductProps[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function toggleOpenCart() {
    setIsOpenCart(!isOpenCart);
  }

  function handleRemoveOneFromCart(productId: string) {
    const aux = cartProducts.filter((item) => item.id !== productId);
    setCartProducts(aux);
  }

  function handleAddOneToCart(product: ProductProps) {
    setCartProducts([product, ...cartProducts]);
  }

  function clearCart() {
    setCartProducts([]);
  }

  useEffect(() => {
    const total = cartProducts.reduce(
      (acc, obj) => acc + obj.priceUnformatted,
      0
    );
    setTotalPrice(total);
  }, [cartProducts]);

  return (
    <CartContext.Provider
      value={{
        isOpenCart,
        cartProducts,
        totalPrice,
        handleAddOneToCart,
        clearCart,
        handleRemoveOneFromCart,
        toggleOpenCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
