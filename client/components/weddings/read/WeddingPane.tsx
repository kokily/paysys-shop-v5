import React from 'react';
import styled from 'styled-components';
import SignModal from '../../sign/SignModal';
import SignRemoveModal from '../../sign/SignRemoveModal';

interface Props {
  wedding: WeddingType;
  onRemoveSign: () => void;
  husband: boolean | null;
  onConfirmHusband: () => void;
  onCancelHusband: () => void;
  setVisibleHusband: () => void;
  bride: boolean | null;
  onConfirmBride: () => void;
  onCancelBride: () => void;
  setVisibleBride: () => void;
}

function WeddingPane({
  wedding,
  onRemoveSign,
  husband,
  onConfirmHusband,
  onCancelHusband,
  setVisibleHusband,
  bride,
  onConfirmBride,
  onCancelBride,
  setVisibleBride,
}: Props) {
  return (
    <Container>
      <Title>웨딩 정산 내역</Title>
      <Name>
        신랑님:{' '}
        <strong className="select" onClick={setVisibleHusband}>
          {wedding.husband_name}
        </strong>{' '}
        <strong style={{ color: 'pink' }}>♡</strong> 신부님:{' '}
        <strong className="select" onClick={setVisibleBride}>
          {wedding.bride_name}
        </strong>
      </Name>

      {(wedding.husband_image || wedding.bride_image) && (
        <SignRemoveModal
          husband={wedding.husband_image || undefined}
          bride={wedding.bride_image || undefined}
          onRemoveSign={onRemoveSign}
        />
      )}

      <h4>
        웨딩일시: {new Date(wedding.wedding_at).toLocaleDateString()}{' '}
        {wedding.event_at}
      </h4>

      <SignModal
        visible={husband || false}
        title="신랑 서명"
        onConfirm={onConfirmHusband}
        onCancel={onCancelHusband}
      />

      <SignModal
        visible={bride || false}
        title="신부 서명"
        onConfirm={onConfirmBride}
        onCancel={onCancelBride}
      />

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
    transition: 1.2s color;
  }
  .select:hover {
    cursor: pointer;
    color: #36bcd1;
  }
`;

export default WeddingPane;
