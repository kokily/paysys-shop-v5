import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';

interface Props {
  onBack: () => void;
  onEdit: () => void;
  onModalClick: () => void;
}

function WeddingButtons({ onBack, onEdit, onModalClick }: Props) {
  return (
    <Container>
      <Button menu onClick={onBack}>
        목록
      </Button>
      <Button edit onClick={onEdit}>
        수정
      </Button>
      <Button remove onClick={onModalClick}>
        삭제
      </Button>
    </Container>
  );
}

// Styles
const Container = styled.div`
  margin-bottom: 1rem;
  display: block;
`;

export default WeddingButtons;
