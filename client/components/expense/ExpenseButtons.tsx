import type { MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

interface Props {
  onBack: () => void;
  onSubmit: (e: MouseEvent) => void;
}

function ExpenseButtons({ onBack, onSubmit }: Props) {
  return (
    <Container>
      <Button cancel onClick={onBack}>
        취소하기
      </Button>
      <Button submit onClick={onSubmit}>
        저장하기
      </Button>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export default ExpenseButtons;
