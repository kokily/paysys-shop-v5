import type { MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';

interface Props {
  onBack: () => void;
  onChangePassword: (e: MouseEvent) => void;
}

function PasswordButtons({ onBack, onChangePassword }: Props) {
  return (
    <Container>
      <Button cancel onClick={onBack}>
        취 소
      </Button>
      <Button submit onClick={onChangePassword}>
        확 인
      </Button>
    </Container>
  );
}

// Styles
const Container = styled.div`
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export default PasswordButtons;
