import React from 'react';
import styled from 'styled-components';
import FrontButtons from './FrontButtons';
import FrontEtc from './FrontEtc';
import FrontHeader from './FrontHeader';
import FrontTable from './FrontTable';
import FrontTotal from './FrontTotal';
import RemoveFront from './RemoveFront';

interface Props {
  front: BillType | undefined;
  user: MeType | null;
  onBack: () => void;
  onRestore: () => void;
  onReserve: () => void;
  onRemoveReserve: () => void;
  modal: boolean;
  onModalClick: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

function ReadFront({
  front,
  user,
  onBack,
  onRestore,
  onReserve,
  onRemoveReserve,
  modal,
  onModalClick,
  onCancel,
  onConfirm,
}: Props) {
  return (
    <Container>
      {front && (
        <Contents>
          <FrontHeader front={front} />
          <FrontTable front={front} />

          {front.etc !== '' && front.etc !== ' ' && (
            <FrontEtc etc={front.etc} />
          )}

          <hr />

          <FrontTotal front={front} />

          {user && (
            <FrontButtons
              front={front}
              onBack={onBack}
              onRestore={onRestore}
              onReserve={onReserve}
              onRemoveReserve={onRemoveReserve}
              onModalClick={onModalClick}
              user_id={user.user_id}
              isAdmin={user.admin}
            />
          )}
        </Contents>
      )}

      <RemoveFront visible={modal} onCancel={onCancel} onConfirm={onConfirm} />
    </Container>
  );
}

// Styles
const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default ReadFront;
