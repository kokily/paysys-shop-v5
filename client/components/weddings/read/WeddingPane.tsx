import React from 'react';
import styled from 'styled-components';

interface Props {
  wedding: WeddingType;
}

function WeddingPane({ wedding }: Props) {
  return (
    <Container>
      <Title>웨딩 정산 내역</Title>
      <Name>
        신랑님: <strong>{wedding.husband_name}</strong>{' '}
        <strong style={{ color: 'pink' }}>♡</strong> 신부님:{' '}
        <strong>{wedding.bride_name}</strong>
      </Name>

      <h4>
        웨딩일시: {new Date(wedding.wedding_at).toLocaleDateString()}{' '}
        {wedding.event_at}
      </h4>

      <hr style={{ width: '90%' }} />

      <h3>웨딩 비용</h3>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.512rem;
  color: #7950f2;
`;

const Name = styled.h3`
  text-align: center;
  strong {
    color: #1098ad;
  }
`;

export default WeddingPane;
