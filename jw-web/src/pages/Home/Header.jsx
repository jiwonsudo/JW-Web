import styled from "styled-components";

const Container = styled.div`
  width: 100vh;
  padding: 70px 30px 0;
`;

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
    <Container>
      <Title>아이디어를 현실로, 최고의 경험을 담아서.</Title>
    </Container>
    );
};

export default Header;