/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Eye from "./eye";
import Facebook from "./facebook";
import GoogleLogo from "./google-logo.svg";

export type TSVGIcons = "eye" | "facebook" | "google";

interface Props {
  type: TSVGIcons;
}

const SVGIcons: React.FC<Props> = ({ type }) => {
  return {
    eye: <Eye />,
    facebook: <Facebook />,
    // eslint-disable-next-line jsx-a11y/alt-text
    google: <img css={css({ width: 32 })} src={GoogleLogo} />,
  }[type];
};

export default SVGIcons;
