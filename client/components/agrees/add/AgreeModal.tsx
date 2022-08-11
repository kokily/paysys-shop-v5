import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../../styles';
import Button from '../../common/Button';
import SignCanvas from '../../sign/SignCanvas';

interface Props {
  visible: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function AgreeModal({ visible, title, onConfirm, onCancel }: Props) {
  if (!visible) return null;

  return (
    <Container>
      <SignBox>
        <h2>{title}</h2>

        <SignCanvas width={320} height={240} />

        <div className="buttons">
          <Button cancel onClick={onCancel}>
            취소
          </Button>
          <Button submit onClick={onConfirm}>
            동의
          </Button>
        </div>
      </SignBox>
    </Container>
  );
}

// Styles
const Container = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignBox = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  ${shadow(1)};
  animation: 0.3s ease-out 0s 1 slideUpFromBottom;
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

export default AgreeModal;
