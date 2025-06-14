import styled from 'styled-components';

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 15px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  list-style: none;
  padding: 5px 0;
  margin: 5px 0 0 0;
  z-index: 9;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  min-width: 100px;
`;

const DropdownMenuItem = styled.li`
  padding: 8px 15px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export { DropdownMenu, DropdownMenuItem };