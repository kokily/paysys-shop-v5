import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';

interface Props {
  onUsersList: () => void;
  onSetAdmin: () => void;
  onSetEmployee: () => void;
  onModalOpen: () => void;
}

function UserButtons({
  onUsersList,
  onSetAdmin,
  onSetEmployee,
  onModalOpen,
}: Props) {
  return (
    <Container>
      <Button menu onClick={onUsersList}>
        목록으로
      </Button>
      <Button remove onClick={onModalOpen}>
        삭제하기
      </Button>
      <Button employee onClick={onSetEmployee}>
        강등하기
      </Button>
      <Button admin onClick={onSetAdmin}>
        승급하기
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

export default UserButtons;
