import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import styled from 'styled-components';

interface Props {
  agrees: AgreeType[];
  onDetailAgree: (id: string) => void;
  setTarget: Dispatch<SetStateAction<HTMLElement | null | undefined>>;
}

function AgreeTable({ agrees, onDetailAgree, setTarget }: Props) {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Th>성명</Th>
            <Th>동의일</Th>
            <Th>서명</Th>
          </tr>
        </thead>
        <tbody>
          {agrees.length > 0 ? (
            agrees.map((agree) => (
              <tr key={agree.id}>
                <Td>
                  <strong onClick={() => onDetailAgree(agree.id)}>
                    {agree.name} 님
                  </strong>
                </Td>
                <Td>{new Date(agree.created_at).toLocaleDateString()}</Td>
                <Td>
                  <img src={agree.sign} />
                </Td>
              </tr>
            ))
          ) : (
            <tr>
              <Td colSpan={3}>데이터가 없습니다.</Td>
            </tr>
          )}
        </tbody>
      </Table>

      <div ref={setTarget} />
    </Container>
  );
}

// Styles
const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
`;

const Table = styled.table`
  width: 100%;
  padding: 0;
  margin-bottom: 1.5rem;
  border-radius: 0.8rem;
  overflow: hidden;
  th,
  td {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
  }
`;

const Th = styled.th`
  background: #7048e8;
  color: white;
`;

const Td = styled.td`
  strong {
    color: #7048e8;
    transition: 0.3s;
    overflow: hidden;
    padding: 0.3rem;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background: #7048e8;
      color: white;
    }
  }
  a {
    font-weight: bold;
    color: #7048e8;
    &:hover {
      color: #f03e3e;
    }
  }
  img {
    width: 100px;
    height: 60px;
  }
`;

export default AgreeTable;
