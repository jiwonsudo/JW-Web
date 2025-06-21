import { css } from "styled-components";

// breakpoints as rem
const breakpoints = {
  tablet: 56.25,  // 900px
  mobile: 42.5,  // 680px
}

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}rem) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});