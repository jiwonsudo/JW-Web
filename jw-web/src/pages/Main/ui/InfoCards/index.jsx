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

  &:hover {
    cursor: pointer;
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
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
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

const InfoCardArrow = styled.img`
  width: 1.7rem;
  aspect-ratio: 1;
  object-fit: cover;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 4;
`;


export const InfoCards = () => {

  return (
    <InfoCardWrapper>
      <InfoCard $delay='.3s' $url='/images/info-cards/about.webp'>
        <InfoCardOverLay/>
        <InfoCardTextBox>
          <InfoCardTitle>{useBreakText('info_cards_projects')}</InfoCardTitle>
        </InfoCardTextBox>
        <InfoCardArrow src="/public/images/info-cards/arrow-top-right.svg"/>
      </InfoCard>
      <InfoCard $delay='.4s' $url='/images/info-cards/skills.webp'>
        <InfoCardOverLay/>
        <InfoCardTextBox>
          <InfoCardTitle>{useBreakText('info_cards_skillsets')}</InfoCardTitle>
        </InfoCardTextBox>
        <InfoCardArrow src="/public/images/info-cards/arrow-top-right.svg"/>
      </InfoCard>
      <InfoCard $delay='.5s' $url='/images/info-cards/projects.webp'>
        <InfoCardOverLay/>
        <InfoCardTextBox>
          <InfoCardTitle>{useBreakText('info_cards_criteria')}</InfoCardTitle>
        </InfoCardTextBox>
        <InfoCardArrow src="/public/images/info-cards/arrow-top-right.svg"/>
      </InfoCard>
    </InfoCardWrapper>
  );
}