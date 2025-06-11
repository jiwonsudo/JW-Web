import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { moveUpToAppear } from "./moveUpToAppear";
import { media } from "../../../shared/styles/mediaQuery";

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

const InfoCard = styled(Link)`
  width: calc((100% - (${INFOCARD_GAP}px * 2)) / 3);
  aspect-ratio: 1 / 1.6;
  background: url(${(props) => props.$url}) center;
  background-size: cover;
  border-radius: 20px;
  opacity: 0;
  animation: ${moveUpToAppear} .5s cubic-bezier(.46,-0.04,.48,1) forwards;
  animation-delay: ${(props) => props.$delay || '0'};
  position: relative;

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
  position: relative;
  margin: 1rem;
  z-index: 3;
`

const InfoCardTitle = styled.h1`
  color: #FAF9F6;
  font-size: x-large;
  font-weight: 600;
  line-height: 1.2em;
`;


export const InfoPreview = () => {
  const { t } = useTranslation();

  return (
    <InfoCardWrapper>
      <InfoCard to='/showcase' $delay='.2s' $url='/images/info-preview/projects.webp'>
        <InfoCardOverLay/>
        <InfoCardTextBox>
          {/* Todo: 임시 텍스트 */}
          <InfoCardTitle>손길을 거친<br/>프로젝트들</InfoCardTitle>
        </InfoCardTextBox>
      </InfoCard>
      <InfoCard to='/about' $delay='.3s' $url='/images/info-preview/skill_set.webp'>
        <InfoCardOverLay/>
        <InfoCardTextBox>
          {/* Todo: 임시 텍스트 */}
          <InfoCardTitle>꾸준히 발전시켜 온<br/>기술들</InfoCardTitle>
        </InfoCardTextBox>
      </InfoCard>
      <InfoCard to='/about' $delay='.4s' $url='/images/info-preview/core_values.webp'>
        <InfoCardOverLay/>
        <InfoCardTextBox>
          {/* Todo: 임시 텍스트 */}
          <InfoCardTitle>결정의 바탕이 되는<br/>기준들</InfoCardTitle>
        </InfoCardTextBox>
      </InfoCard>
    </InfoCardWrapper>
  );
}