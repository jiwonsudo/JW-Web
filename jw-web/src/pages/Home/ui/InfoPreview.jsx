import styled from "styled-components";

const InfoCardWrapper = styled.div`
  height: 470px;
`;

const InfoCard = styled.div`
  width: 300px;
  height: 470px;
  background-color: pink;
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