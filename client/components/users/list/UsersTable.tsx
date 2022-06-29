import React from 'react';
import styled from 'styled-components';
import { media, shadow } from '../../../styles';

interface Props {
  users: UserType[];
  onDetailUser: (id: string) => void;
}

function UsersTable({ users, onDetailUser }: Props) {
  return (
    <Container>
      <table>
        <thead>
          <Tr>
            <Th>ID</Th>
            <Th>성명</Th>
            <Th>가입일</Th>
            <Th>관리자</Th>
          </Tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <Tr
                key={user.id}
                style={{ cursor: 'pointer' }}
                onClick={() => onDetailUser(user.id)}
              >
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{new Date(user.created_at).toLocaleDateString()}</td>
                <td>{user.admin ? '관리자' : '일반'}</td>
              </Tr>
            ))
          ) : (
            <Tr>
              <td colSpan={4}>사용자가 없습니다.</td>
            </Tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}

// Styles
const Container = styled.div`
  table {
    margin-left: 5rem;
    margin-right: 5rem;
    border-radius: 0.8rem;
    overflow: hidden;
    ${shadow(1)}
    ${media.medium} {
      margin-left: 0;
      margin-right: 0;
    }
  }

  th,
  td {
    border-radius: 0.8rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }
`;

const Tr = styled.tr`
  &:hover {
    background: rgba(255, 187, 0, 0.2);
  }
`;

const Th = styled.th`
  background: #15aabf;
  color: white;
  ${media.medium} {
    &:first-child {
      width: 45%;
    }
  }
`;

export default UsersTable;
