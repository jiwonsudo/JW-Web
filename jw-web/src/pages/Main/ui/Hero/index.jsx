import styled from "styled-components";
import { useTranslation } from "react-i18next";
import i18n from "../../../../features/language/i18n";

import { media } from '../../../../shared/styles/mediaQuery';

import { moveUpToAppear } from "../moveUpToAppear";

const Container = styled.div`
  padding: 150px 0 150px 50px;

  ${media.mobile`
    padding: 150px 0 150px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

const Title = styled.h1`
  font-size: xxx-large;
  font-weight: 700;
  color: #0e1111;
  line-height: 120%;
  display: inline-block;
  opacity: 0;
  animation: ${moveUpToAppear} .5s cubic-bezier(.46,-0.04,.48,1) forwards;

  ${media.mobile`
    font-size: xx-large;
  `}
`;

const SubTitle = styled.h2`
  margin-top: 1em;
  font-size: large;
  font-weight: 500;
  color: #7b8383;
  opacity: 0;
  animation: ${moveUpToAppear} .5s cubic-bezier(.46,-0.04,.48,1) forwards;
  animation-delay: .2s;
`;

const GText = styled.p`
  font-weight: 700;
  background: linear-gradient(to right,
    ${(props => props.firstColor || '#412df5')}, 
    ${(props => props.secondColor || '#f5832b')});
  -webkit-background-clip: text; /* Chrome, Safari */
  background-clip: text; /* Firefox */
  color: transparent;
  display: inline;
`;

export const Hero = () => {
  const { t } = useTranslation();
  const currLang = i18n.language;

  return (
    <Container>
      <Title $currLang={currLang}>{t('hero_1')}<br/><GText>{t('hero_2')}</GText>{t('hero_3')}</Title>
      <SubTitle>{t('hero_subtitle')}</SubTitle>
    </Container>
    );
};