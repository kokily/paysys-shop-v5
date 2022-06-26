import React from 'react';
import styled from 'styled-components';

interface Props {
  front: BillType;
}

function FrontTotal({ front }: Props) {
  return (
    <Container>
      {front.reserve ? (
        <>
          <Pane>
            총 금액 :{' '}
            <span style={{ color: 'gray', fontSize: '1.5rem' }}>
              {front.total_amount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
            원
          </Pane>
          <Pane>
            예약금 :{' '}
            <Reserve>
              {front.reserve.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Reserve>
            원
          </Pane>
          <Pane>
            결제금액 :{' '}
            <span style={{ color: 'blue', fontSize: '2rem' }}>
              {(front.total_amount - front.reserve)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
            원
          </Pane>
        </>
      ) : (
        <Pane>
          결제금액 :{' '}
          <span style={{ color: 'blue', fontSize: '2rem' }}>
            {front.total_amount
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </Pane>
      )}
    </Container>
  );
}

// Styles
const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Pane = styled.div`
  margin-bottom: 0.75rem;
  transition: 0.2s all;
`;

const Reserve = styled.span`
  color: red;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #ffa8a8;
  }
`;

export default FrontTotal;
