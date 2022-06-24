/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  color: #98a1ad;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

export const Required = styled.span`
  color: #fe453e;
`;

export const Input = styled.input<{
  hasError?: boolean;
}>`
  font-size: 0.875rem;
  padding: 0.625rem 0.75rem;
  border: 1px solid ${({ hasError }) => (hasError ? "#fe453e" : "#dbdde2")};
  border-radius: 0.5rem;
  outline: none;
`;

export const ErrorText = styled.p`
  color: #fe453e;
  font-size: 0.75rem;
  padding-top: 0.375rem;
  margin: 0;
`;
