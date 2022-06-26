import React from 'react';
import styled from 'styled-components';

interface Props {
  totalAmount: number;
}

function CartTotal({ totalAmount }: Props) {
  return (
    <Container>
      <div className="total">
        예상 결제금액 :{' '}
        <span style={{ color: 'red', fontSize: '2rem' }}>
          {totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </span>
        원
      </div>
    </Container>
  );
}

// Styles
const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-right: 1rem;
  .total {
    float: right;
  }
`;

export default CartTotal;
