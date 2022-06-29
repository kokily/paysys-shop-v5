import React from 'react';
import styled from 'styled-components';
import { media, shadow } from '../../../styles';
import RemoveUserModal from './RemoveUserModal';
import UserButtons from './UserButtons';
import UserContent from './UserContent';

interface Props {
  user: UserType | undefined;
  onUsersList: () => void;
  onSetAdmin: () => void;
  onSetEmployee: () => void;
  modal: boolean;
  onModalOpen: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

function ReadUser({
  user,
  onUsersList,
  onSetAdmin,
  onSetEmployee,
  modal,
  onModalOpen,
  onCancel,
  onConfirm,
}: Props) {
  return (
    <Container>
      <Contents>
        <h2>사용자 상세보기</h2>

        <DownBorder />

        <UserButtons
          onUsersList={onUsersList}
          onSetAdmin={onSetAdmin}
          onSetEmployee={onSetEmployee}
          onModalOpen={onModalOpen}
        />

        {user && <UserContent user={user} />}
      </Contents>

      <RemoveUserModal
        visible={modal}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </Container>
  );
}

/*
        <ReadUserButtons
          onList={onList}
          onAdmin={onSetAdmin}
          onEmployee={onSetEmployee}
          modal={modal}
          onRemoveClick={onRemoveClick}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />

*/

// Styles
const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding: 1rem;
  ${media.medium} {
    padding: 0.2rem;
  }
`;

const Contents = styled.div`
  ${shadow(1)};
  text-align: center;
  width: 80%;
  background: #dbe4ff;
  ${media.medium} {
    width: 100%;
  }

  h2 {
    font-size: 1.712rem;
  }
`;

const DownBorder = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 1rem;
  height: 3px;
  background: linear-gradient(to right, #12b886, #5c7cfa);
  ${media.medium} {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export default ReadUser;
