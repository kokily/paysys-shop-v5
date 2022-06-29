import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles';

interface Props {
  items: ItemType[];
  onDetailItem: (id: string) => void;
}

function ItemsTable({ items, onDetailItem }: Props) {
  return (
    <Container>
      <thead>
        <Tr>
          <Th>분류</Th>
          <Th>구분</Th>
          <Th>상품명</Th>
          <Th>단위</Th>
          <Th>단가</Th>
        </Tr>
      </thead>
      <tbody>
        {items.length > 0 ? (
          items.map((item) => (
            <Tr
              key={item.id}
              style={{ cursor: 'pointer' }}
              onClick={() => onDetailItem(item.id)}
            >
              <td>{item.divide}</td>
              <td>{item.native}</td>
              <td>{item.name}</td>
              <td>{item.unit}</td>
              <td>
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
            </Tr>
          ))
        ) : (
          <Tr>
            <td colSpan={5}>데이터가 없습니다</td>
          </Tr>
        )}
      </tbody>
    </Container>
  );
}

// Styles
const Container = styled.table`
  width: 100%;
  margin-top: 1rem;
  margin-left: 5rem;
  margin-right: 5rem;
  border-radius: 0.8rem;
  overflow: hidden;
  ${media.medium} {
    margin-left: 0;
    margin-right: 0;
  }

  th,
  td {
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
`;

export default ItemsTable;
