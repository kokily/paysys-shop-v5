import React, { useState } from 'react';
import styled from 'styled-components';
import RemoveSign from './RemoveSign';

interface Props {
  husband?: string;
  bride?: string;
  onRemoveSign: () => void;
}

function SignRemoveModal({ husband, bride, onRemoveSign }: Props) {
  const [remove, setRemove] = useState(false);

  const onRemoveClick = () => {
    setRemove(true);
  };

  const onCancel = () => {
    setRemove(false);
  };

  const onConfirm = () => {
    setRemove(false);
    onRemoveSign();
  };

  return (
    <>
      <Container onClick={onRemoveClick}>
        <SignBox>
          <label>신랑님 서명</label>
          {husband && <img src={husband} alt="" />}
        </SignBox>
        <SignBox>
          <label>신부님 서명</label>
          {bride && <img src={bride} alt="" />}
        </SignBox>
      </Container>
      <RemoveSign visible={remove} onConfirm={onConfirm} onCancel={onCancel} />
    </>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

const SignBox = styled.div`
  width: 160px;
  height: 60px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default SignRemoveModal;
