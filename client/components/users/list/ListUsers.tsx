import type {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  MouseEvent,
  SetStateAction,
} from 'react';
import React from 'react';
import styled from 'styled-components';
import Search from '../../common/search/Search';
import UsersTable from './UsersTable';

interface Props {
  users: UserType[];
  username: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
  onDetailUser: (id: string) => void;
  setTarget: Dispatch<SetStateAction<HTMLElement | null | undefined>>;
}

function ListUsers({
  users,
  username,
  onChange,
  onSearch,
  onKeyPress,
  onDetailUser,
  setTarget,
}: Props) {
  return (
    <Container>
      <h1>사용자 목록</h1>

      <Search
        mode="이름"
        search={username}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
      />

      <UsersTable users={users} onDetailUser={onDetailUser} />

      <div ref={setTarget} />
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 6rem;
  h1 {
    text-align: center;
  }
`;

export default ListUsers;
