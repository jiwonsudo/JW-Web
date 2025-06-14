import { css } from "styled-components";

const breakpoints = {
  mobile: 680,
}

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});