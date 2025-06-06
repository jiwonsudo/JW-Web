import styled from "styled-components";

const Container = () => {

};

const Title = styled.h1`
  font-size: large;
  font-weight: 700;
  background: linear-gradient((right, #ff7e5f, #feb47b));
  -webkit-background-clip: text; /* Chrome, Safari */
  background-clip: text; /* Firefox */
  /* color: transparent; */
  display: inline;
`;

const Header = () => {
  return (
      <Title>아이디어를 현실로, 최고의 경험을 담아서.</Title>
    );
};

export default Header;