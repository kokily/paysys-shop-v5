import type { MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';

interface Props {
  onAddCart: (e: MouseEvent) => void;
  onBack: () => void;
}

function ReadMenuButtons({ onAddCart, onBack }: Props) {
  return (
    <Container>
      <Button submit onClick={onAddCart}>
        전표전송
      </Button>
      <Button cancel onClick={onBack}>
        취소하기
      </Button>
    </Container>
  );
}

// Styles
const Container = styled.div`
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
`;

export default ReadMenuButtons;
