import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

interface Props {
  cart: CartType | undefined;
  onRemoveOne: (id: string, name: string) => void;
}

function CartTop({ cart, onRemoveOne }: Props) {
  return (
    <>
      <h2>전표 확인(종합)</h2>

      <Container>
        <thead>
          <Th>적용</Th>
          <Th>수량</Th>
          <Th>단가</Th>
          <Th>삭제</Th>
        </thead>
        <tbody>
          {cart &&
            cart.items &&
            cart.items.map((item) => (
              <tr key={item.id}>
                <Td>
                  [ {item.native} ]<br />
                  {item.divide}
                </Td>
                <Td>
                  {item.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Td>
                <Td>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원 /<br />
                  <strong>
                    {item.amount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </strong>
                </Td>
                <Td>
                  <Button
                    remove
                    onClick={() => onRemoveOne(item.id, item.name)}
                  >
                    삭제
                  </Button>
                </Td>
              </tr>
            ))}

          {!cart && (
            <tr>
              <Td colSpan={4}>데이터가 없습니다</Td>
            </tr>
          )}
        </tbody>
      </Container>
    </>
  );
}

// Styles
const Container = styled.table`
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

const Th = styled.th`
  background: #0ca678;
  color: white;
`;

const Td = styled.td`
  border-bottom: 1px solid #0ca678;
  strong {
    color: blue;
  }
`;

export default CartTop;
