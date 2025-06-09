import styled from 'styled-components';

const LogoWrapper = styled.div`
  margin-left: 15px;
  width: 30px;
  aspect-ratio: 1;
  line-height: 10px;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export { LogoImage, LogoWrapper };