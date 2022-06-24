/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import React from "react";
import { Container } from "./ButtonStyles";

const ButtonVariants = ["default", "outlined"] as const;

export type TButtonVariant = typeof ButtonVariants[number];

interface Props {
  children: React.ReactNode;
  customStyles?: SerializedStyles;
  variant?: TButtonVariant;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  customStyles = {},
  children,
  variant = "default",
  onClick = () => {},
}) => {
  return (
    <Container css={customStyles} variant={variant} onClick={() => onClick()}>
      {children}
    </Container>
  );
};

export default Button;
