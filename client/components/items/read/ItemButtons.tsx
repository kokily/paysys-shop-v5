import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles';
import Button from '../../common/Button';

interface Props {
  onBack: () => void;
  onEdit: () => void;
  onModalOpen: () => void;
}

function ItemButtons({ onBack, onEdit, onModalOpen }: Props) {
  return (
    <Container>
      <Button submit onClick={onBack}>
        목록
      </Button>
      <Button edit onClick={onEdit}>
        수정
      </Button>
      <Button remove onClick={onModalOpen}>
        삭제
      </Button>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: contents;
  margin-top: 1rem;
  button {
    margin-right: 0.5rem;
  }
  ${media.large} {
    width: 1200px;
    padding-left: 15rem;
    padding-right: 15rem;
  }
`;

export default ItemButtons;
