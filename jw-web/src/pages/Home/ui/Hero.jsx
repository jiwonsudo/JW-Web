import styled from "styled-components";
import { useTranslation } from "react-i18next";
import i18n from "../../../features/language/i18n";

import { media } from '../../../shared/styles/mediaQuery';

import { moveUpToAppear } from "./moveUpToAppear";

const Container = styled.div`
  /* width: 100%; */
  padding: 150px 0 120px 50px;

  ${media.mobile`
    padding: 150px 0 100px 0;
    display: flex;
    justify-content: center;
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

  ${({ $currLang }) => media.mobile`
    font-size: ${$currLang === 'en' ? 'x-large' : 'xx-large'};
  `}
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
      <div>
        <Title $currLang={currLang}>{t('title_1')}<br/><GText>{t('title_2')}</GText>{t('title_3')}</Title>
      </div>
    </Container>
    );
};