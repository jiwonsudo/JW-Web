import styled from "styled-components";

const ToggleBtn = styled.button`
  width: 27px;
  aspect-ratio: 1;
  color: #0e1111;
  background-color: #eeede7;
  border: 1px solid #adadad;
  border-radius: 50%;
  line-height: 9px;
  &:hover {
    cursor: pointer;
  }
`;

const ToggleWrapper = styled.div`
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { ToggleBtn, ToggleWrapper };