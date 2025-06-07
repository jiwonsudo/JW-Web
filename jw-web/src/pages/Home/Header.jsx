import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

const moveUpToAppear = keyframes`
  0% {
    transform: translateY(30%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100vh;
  padding: 150px 50px 0;
`;

const Title = styled.h1`
  font-size: xxx-large;
  font-weight: 700;
  color: #0e1111;
  line-height: 120%;
  opacity: 0;
  animation: ${moveUpToAppear} .8s cubic-bezier(.46,-0.04,.48,1) forwards;
  animation-delay: .2s;
`;

const GText = styled.p`
  font-size: xxx-large;
  font-weight: 700;
  background: linear-gradient(to right,
    ${(props => props.firstColor || '#412df5')}, 
    ${(props => props.secondColor || '#f5832b')});
  -webkit-background-clip: text; /* Chrome, Safari */
  background-clip: text; /* Firefox */
  color: transparent;
  display: inline;
`;

const Header = () => {
  const { t } = useTranslation();

  return (
    <Container>
        <Title><GText>{t('title_1')}</GText>{t('title_2')}<br/>{t('title_3')}</Title>
    </Container>
    );
};

export default Header;