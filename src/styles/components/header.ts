import { styled } from "@stitches/react";

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  display: "flex",
  maxWidth: 1180,
  margin: "0 auto",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
});

export const ButtonHeader = styled("button", {
  padding: 12,
  borderRadius: 6,
  backgroundColor: "$gray800",
  cursor: "pointer",
  border: "2px solid",
  borderColor: "transparent",
  transition: "all 0.2s",

  "&:hover": {
    border: "2px solid",
    borderColor: "$green500",
  },
});

export const BadgeNotification = styled("div", {
  position: "absolute",
  border: "2px solid",
  borderColor: "$gray900",
  backgroundColor: "$green500",
  width: 26,
  height: 26,
  borderRadius: "50%",
  color: "$white",
  fontSize: "md",
  top: "1.5rem",
  right: "-0.3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
