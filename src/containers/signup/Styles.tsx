/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #5bcde8;
  overflow: auto;
`;

export const Form = styled.div`
  width: calc(90% - 3rem);
  max-width: 420px;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem 1.5rem;
  margin: 2rem auto;

  @media (max-width: 480px) {
    width: calc(95% - 1.5rem);
    padding: 1rem 0.75rem;
  }
`;

export const Title = styled.h1`
  color: #5bcde8;
  font-size: 28px;
  line-height: 1.2;
  margin: 0;
`;

export const SubTitle = styled.h3`
  color: #797979;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
  padding: 0.5rem 0;
  margin: 0;
`;

export const SocialAuth = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid #98a1ad;
  margin-bottom: 1.25rem;
`;

export const Text = styled.p`
  color: #98a1ad;
  font-size: 0.875rem;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 1rem;
`;

export const TextLink = styled.span`
  color: #5bcde8;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 0;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 100%;
  color: #fff;
  background-color: #ffcc01;
  font-size: 0.875rem;
  line-height: 1.2;
  padding: 0.5rem;
  border-radius: 1rem;
`;

export const EyeIconButton = styled.div`
  display: flex;
  position: absolute;
  right: 12px;
  top: 30px;
  cursor: pointer;

  svg path {
    fill: #98a1ad;
  }
`;

// custom styles
export const GoogleButtonStyles = css({
  height: 18,
  marginBottom: 12,
});

export const FacebookButtonStyles = css({
  height: 18,
  backgroundColor: "#3b5997",
  borderColor: "#3b5997",
});

export const SubmitButtonStyles = css({
  backgroundColor: "#ffcc01",
  borderColor: "#ffcc01",
});

export const FooterTextStyles = css({
  marginTop: 16,
  textAlign: "center",
});
