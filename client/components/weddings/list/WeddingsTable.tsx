import React from 'react';
import styled from 'styled-components';

interface Props {
  weddings: WeddingType[];
  onDetailWedding: (id: string) => void;
}

function WeddingsTable({ weddings, onDetailWedding }: Props) {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Th>웨딩일자</Th>
            <Th>웨딩시간</Th>
            <Th>신랑</Th>
            <Th>신부</Th>
          </tr>
        </thead>
        <tbody>
          {weddings.length > 0 ? (
            weddings.map((wedding) => (
              <tr key={wedding.id}>
                <Td>
                  <strong onClick={() => onDetailWedding(wedding.id)}>
                    {wedding.wedding_at.toString()}
                  </strong>
                </Td>
                <Td>{wedding.event_at}</Td>
                <Td>{wedding.husband_name}</Td>
                <Td>{wedding.bride_name}</Td>
              </tr>
            ))
          ) : (
            <tr>
              <Td colSpan={4}>데이터가 없습니다.</Td>
            </tr>
          )}
        </tbody>
      </Table>
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
`;

export default WeddingsTable;
