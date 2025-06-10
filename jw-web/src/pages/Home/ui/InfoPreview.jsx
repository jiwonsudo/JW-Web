import styled from "styled-components";
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

const InfoCard = styled.div`
  width: calc((100% - (${INFOCARD_GAP}px * 2)) / 3);
  aspect-ratio: 1 / 1.6;
  background-color: pink; /* TODO: delete after Test */
  border-radius: 20px;
  animation: ${moveUpToAppear} .8s cubic-bezier(.46,-0.04,.48,1) forwards;
  animation-delay: ${(props) => props.delay ? delay : '.2s'};

  ${media.mobile`
    width: 100%;
    aspect-ratio: 2 / 1;
    flex-direction: column;
    align-items: center;
    gap: ${INFOCARD_GAP}px;
  `}
`;



export const InfoPreview = () => {
  return (
    <InfoCardWrapper>
      <InfoCard/>
      <InfoCard/>
      <InfoCard/>
    </InfoCardWrapper>
  );
}