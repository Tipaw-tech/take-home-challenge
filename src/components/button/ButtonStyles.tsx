/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { TButtonVariant } from "./Button";

export const Container = styled.div<{
  variant: TButtonVariant;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 1.25rem);
  gap: 0.5rem;
  background-color: ${({ variant }) => {
    if (variant === "outlined") {
      return "transparent";
    }
    return "#5bcde8";
  }};
  color: ${({ variant }) => {
    if (variant === "outlined") {
      return "#959595";
    }
    return "#fff";
  }};
  font-size: 1rem;
  border-radius: 1.25rem;
  padding: 0.625rem;
  border: 1px solid
    ${({ variant }) => {
      if (variant === "outlined") {
        return "#959595";
      }
      return "#5bcde8";
    }};
  cursor: pointer;
  transition: all 0.1s ease-in;

  :hover {
    opacity: 0.9;
  }
`;
