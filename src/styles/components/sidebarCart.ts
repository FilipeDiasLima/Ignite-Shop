import { styled } from "..";

export const CartContainer = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 10,

  backgroundColor: "$gray800",
  boxShadow: "-10px 0px 23px rgba(0, 0, 0, 0.8)",

  maxWidth: 560,
  width: "100%",
  height: "100%",

  display: "flex",
  flexDirection: "column",
  padding: "3rem",
  alignItems: "flex-start",
  justifyContent: "flex-start",

  transform: "translateX(150%)",
  "-webkit-transform": "translateX(100%)",

  transition: "all 0.3s ease-in-out",
  "-webkit-transition": "all 0.3s ease-in-out",

  variants: {
    fadeIn: {
      true: {
        transform: "translateX(0%)",
        "-webkit-transform": "translateX(0%)",
      },
    },
  },

  "> strong": {
    fontSize: "$lg",
  },
});

export const ProductContainer = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  overflowY: "scroll",
  maxHeight: 650,
});

export const ProductCart = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  marginTop: "2rem",
});

export const ProductInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginLeft: "1rem",

  p: {
    marginTop: "0.4rem",
    color: "$gray300",
    fontSize: "$lg",
  },

  strong: {
    marginTop: "0.4rem",
    fontSize: "$lg",
  },

  button: {
    marginTop: "0.4rem",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    color: "$green500",
    fontWeight: "bold",
    fontSize: "$md",
    transition: "all 0.2s",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 102,
  height: 95,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const CartInfo = styled("div", {
  width: "100%",
  marginTop: "auto",
});

export const CartAmountInfo = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginTop: "1rem",

  p: {
    fontSize: "$md",
    color: "$gray300",
  },
});

export const CartTotalInfo = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  fontWeight: "bold",
  width: "100%",
  marginTop: "1rem",

  p: {
    fontSize: "$md",
  },

  strong: {
    fontSize: "$2xl",
  },
});

export const CloseButton = styled("button", {
  border: "none",
  backgroundColor: "transparent",
  alignSelf: "flex-end",
  marginBottom: "2rem",
  cursor: "pointer",
});

export const CartButton = styled("button", {
  marginTop: "3rem",
  backgroundColor: "$green500",
  border: 0,
  color: "$white",
  borderRadius: 8,
  padding: "1.25rem",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "$md",
  transition: "all 0.2s",
  width: "100%",

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  "&:hover": {
    backgroundColor: "$green300",
  },
});
