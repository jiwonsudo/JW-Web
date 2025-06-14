import styled from "styled-components";

import { useBreakText } from '../../../../features/language/useBreakText';
import { moveUpToAppear } from "./../moveUpToAppear";
import { media } from "../../../../shared/styles/mediaQuery";

const INFOCARD_GAP = 15;

const InfoCardWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${INFOCARD_GAP}px;

  ${media.mobile`
    width: 80%;
    flex-direction: column;
    align-items: center;
    gap: ${INFOCARD_GAP}px;
  `}
`;

const InfoCard = styled.button`
  width: calc((100% - (${INFOCARD_GAP}px * 2)) / 3);
  aspect-ratio: 1 / 1.6;
  background: url(${(props) => props.$url}) center;
  background-size: cover;
  border-radius: 20px;
  border: none;
  text-align: left;
  opacity: 0;
  animation: ${moveUpToAppear} .5s cubic-bezier(.46,-0.04,.48,1) forwards;
  animation-delay: ${(props) => props.$delay || '0'};
  position: relative;

  transition: transform .1s ease-out, box-shadow 0.3s ease-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px #3b3e4b;
  }

  ${media.mobile`
    width: 100%;
    aspect-ratio: 2 / 1;
    flex-direction: column;
    align-items: center;
    gap: ${INFOCARD_GAP}px;
  `}
`;

const InfoCardOverLay = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
  border-radius: 20px;
  position: absolute;
  top: 0; left: 0;
  z-index: 2;
`;

const InfoCardTextBox = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 3;
`

const InfoCardTitle = styled.h1`
  color: #FAF9F6;
  font-size: x-large;
  font-weight: 600;
  line-height: 1.2em;
`;

const InfoCardFooter = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.1rem;
  z-index: 4;
`;

const InfoCardSubtitle = styled.h2`
  color: #FAF9F6;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.2em;
  text-align: right;
  word-break: keep-all;
`;

const InfoCardArrow = styled.img`
  width: 1.7rem;
  aspect-ratio: 1;
  object-fit: cover;
`;


export const InfoCards = () => {

  return (
    <InfoCardWrapper>
      <InfoCard $delay='.3s' $url='/images/info-cards/about.webp'>
        <InfoCardOverLay/>
        <InfoCardTextBox>
          <InfoCardTitle>{useBreakText('info_cards_about')}</InfoCardTitle>
        </InfoCardTextBox>
        <InfoCardFooter>
          <InfoCardSubtitle>{useBreakText('info_cards_about_sub')}</InfoCardSubtitle>
          <InfoCardArrow src="/public/images/info-cards/arrow-top-right.svg"/>
        </InfoCardFooter>
      </InfoCard>
      <InfoCard $delay='.4s' $url='/images/info-cards/skills.webp'>
        <InfoCardOverLay/>
        <InfoCardTextBox>
          <InfoCardTitle>{useBreakText('info_cards_skillsets')}</InfoCardTitle>
        </InfoCardTextBox>
        <InfoCardFooter>
          <InfoCardSubtitle>{useBreakText('info_cards_skillsets_sub')}</InfoCardSubtitle>
          <InfoCardArrow src="/public/images/info-cards/arrow-top-right.svg"/>
        </InfoCardFooter>
      </InfoCard>
      <InfoCard $delay='.5s' $url='/images/info-cards/projects.webp'>
        <InfoCardOverLay/>
        <InfoCardTextBox>
          <InfoCardTitle>{useBreakText('info_cards_showcase')}</InfoCardTitle>
        </InfoCardTextBox>
        <InfoCardFooter>
          <InfoCardSubtitle>{useBreakText('info_cards_showcase_sub')}</InfoCardSubtitle>
          <InfoCardArrow src="/public/images/info-cards/arrow-top-right.svg"/>
        </InfoCardFooter>
      </InfoCard>
    </InfoCardWrapper>
  );
}