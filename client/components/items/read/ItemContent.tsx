import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../../styles';

interface Props {
  item: ItemType;
}

function ItemContent({ item }: Props) {
  return (
    <Container>
      <Table>
        <tbody>
          <Tr>
            <Th>품명</Th>
            <td>{item.name}</td>
          </Tr>
          <Tr>
            <Th>출 신</Th>
            <td>{item.native}</td>
          </Tr>
          <Tr>
            <Th>구 분</Th>
            <td>{item.divide}</td>
          </Tr>
          <Tr>
            <Th>단 위</Th>
            <td>{item.unit}</td>
          </Tr>
          <Tr>
            <Th>단 가</Th>
            <td>
              {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </td>
          </Tr>
        </tbody>
      </Table>
    </Container>
  );
}

// Styles
const Container = styled.div`
  position: relative;
  width: 300px;
  margin: 36px auto;
  padding: 1rem;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  ${shadow(1)};
`;

const Table = styled.table`
  width: 100%;
  padding: 0;
  border-radius: 0.8rem;
  overflow: hidden;
  th,
  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }
`;

const Tr = styled.tr`
  &:hover {
    background: rgba(140, 206, 223, 0.2);
  }
`;

const Th = styled.th`
  background: #364fc7;
  color: white;
`;

export default ItemContent;
