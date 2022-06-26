import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';

interface Props {
  front: BillType;
  onBack: () => void;
  onRestore: () => void;
  onReserve: () => void;
  onRemoveReserve: () => void;
  onModalClick: () => void;
  user_id: string | null;
  isAdmin: boolean;
}

function FrontButtons({
  front,
  onBack,
  onRestore,
  onReserve,
  onRemoveReserve,
  onModalClick,
  user_id,
  isAdmin,
}: Props) {
  return (
    <Container>
      <ButtonBox>
        {user_id && front && (isAdmin || front.user_id === user_id) && (
          <>
            <Button remove onClick={onModalClick}>
              삭 제
            </Button>
            <Button restore onClick={onRestore}>
              수 정
            </Button>
          </>
        )}
        <Button menu onClick={onBack}>
          목 록
        </Button>

        {user_id && front && isAdmin && (
          <>
            {!front.reserve || front.reserve === 0 ? (
              <Button reserve onClick={onReserve}>
                + 예약금
              </Button>
            ) : (
              <Button reserve onClick={onRemoveReserve}>
                예약금 삭제
              </Button>
            )}
          </>
        )}
      </ButtonBox>
    </Container>
  );
}

// Styles
const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default FrontButtons;
