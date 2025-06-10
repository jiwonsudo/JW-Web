import styled from "styled-components";

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavBtn = styled.button`
  font-size: small;
  font-weight: 400;
  background: transparent;
  border: none;
  color: #0e1111;
  &:hover {
    cursor: pointer;
  }
`;

export { NavBtn, Navbar };