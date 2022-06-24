/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const getCheckMarkSvgString = (rgbColor: string) => {
  return `'data:image/svg+xml,<svg viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="${rgbColor}" d="M10.6876 0.804268C10.3053 0.408357 9.67439 0.397378 9.27847 0.779742C9.27018 0.787742 9.26201 0.795917 9.25395 0.804268L3.96389 6.09439L1.68893 3.81943C1.29302 3.43707 0.662129 3.44804 0.279765 3.84395C-0.0932551 4.23017 -0.0932551 4.84243 0.279765 5.22865L3.25931 8.20819C3.6485 8.59727 4.27933 8.59727 4.66847 8.20819L10.6631 2.21349C11.059 1.83107 11.07 1.20018 10.6876 0.804268Z"/></svg>'`;
};

export const ResultCheckMark = styled.div<{
  checked?: boolean;
  error?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 1.125rem;
  height: 1.125rem;
  transition: all 0.1s ease;
  border: 1px solid
    ${({ checked, error }) =>
      error ? "#fe453e" : checked ? "#5bcde8" : "#98a1ad"};
  border-radius: 4px;
  margin-right: 1rem;

  &::after {
    content: "";
    position: relative;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: url(${() => getCheckMarkSvgString("rgb(91, 205, 232)")});
    display: block;
    height: 70%;
    width: 70%;
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    transition: all 0.1s ease;
  }
`;

export const Container = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const CheckInput = styled.input`
  opacity: 0;
`;

export const Label = styled.label<{
  error?: boolean;
}>`
  color: ${({ error }) => (error ? "#fe453e" : "#959ca4")};
  font-size: 0.875rem;
  margin-left: 0.5rem;
`;
