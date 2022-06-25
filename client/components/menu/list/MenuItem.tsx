import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../../styles';

interface Props {
  item: ItemType;
  onDetailMenu: (id: string) => void;
}

function ListMenuItem({ item, onDetailMenu }: Props) {
  return (
    <Container className={item.native} onClick={() => onDetailMenu(item.id)}>
      {item.name} |{' '}
      {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    </Container>
  );
}

// Styles
const Container = styled.div`
  color: white;
  ${shadow(1)};
  font-size: 1.215rem;
  font-weight: 700;
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  &.현역 {
    background: #15aabf;
  }
  &.예비역 {
    background: #94d82d;
  }
  &.일반 {
    background: #ffa94d;
  }
  -webkit-filter: brightness(0.9);
  filter: brightness(0.9);
  &:hover {
    -webkit-filter: brightness(1);
    filter: brightness(1);
  }
  &:active {
    transform: translateY(3px);
  }
`;

export default ListMenuItem;
