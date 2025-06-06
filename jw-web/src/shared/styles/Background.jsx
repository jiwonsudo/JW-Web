import styled from "styled-components";

const Background = styled.div`
  background-color: ${(props) => props.theme.colors.bgColor};
  color: ${(props) => props.theme.colors.textColor};
  width: 100vw;
  min-height: 200vh;
`;

export default Background;