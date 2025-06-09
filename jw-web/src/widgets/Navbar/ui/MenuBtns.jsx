import styled from "styled-components";

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuBtn = styled.button`
  font-size: small;
  font-weight: 400;
  background: transparent;
  border: none;
  color: #0e1111;
  &:hover {
    cursor: pointer;
  }
`;

export { MenuBtn, MenuWrapper };