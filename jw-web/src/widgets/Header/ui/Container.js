import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  border-bottom: 0.1px #eeede7 solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FAF9F6;
  color: #0e1111;
  z-index: 2;

  position: fixed;
  top: 0; left: 0; right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.$isNavVisible ? 'translateY(0)' : 'translateY(-50px)')};
`;