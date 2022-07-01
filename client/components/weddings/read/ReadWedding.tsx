import React from 'react';
import styled from 'styled-components';
import { media, shadow } from '../../../styles';
import ReadWeddingFirst from './ReadWeddingFirst';
import ReadWeddingSecond from './ReadWeddingSecond';
import RemoveWeddingModal from './RemoveWeddingModal';
import WeddingButtons from './WeddingButtons';
import WeddingPane from './WeddingPane';

interface Props {
  wedding:
    | {
        wedding: WeddingType;
        convention: ConventionType;
        company: CompanyType;
        event: EventType;
        hanbok: HanbokType;
        meal: MealType;
        present: PresentType;
        reserve: ReserveType;
        prepayment: PrepaymentType;
      }
    | undefined;
  onBack: () => void;
  onEdit: () => void;
  onRemoveSign: () => void;
  modal: boolean;
  onModalOpen: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

function ReadWedding({
  wedding,
  onBack,
  onEdit,
  onRemoveSign,
  modal,
  onModalOpen,
  onCancel,
  onConfirm,
}: Props) {
  return (
    <Container>
      {wedding && (
        <>
          <WeddingPane wedding={wedding.wedding} />

          <Contents>
            <ReadWeddingFirst
              wedding={wedding.wedding}
              convention={wedding.convention}
              company={wedding.company}
              event={wedding.event}
              hanbok={wedding.hanbok}
            />
            <ReadWeddingSecond
              wedding={wedding.wedding}
              meal={wedding.meal}
              present={wedding.present}
              reserve={wedding.reserve}
              hanbok={wedding.hanbok}
              prepayment={wedding.prepayment}
            />
          </Contents>

          <WeddingButtons
            onBack={onBack}
            onEdit={onEdit}
            onModalClick={onModalOpen}
          />
        </>
      )}

      <RemoveWeddingModal
        visible={modal}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 6rem;
  ${shadow(1)};
  animation: 0.3s ease-out 0s 1 fadeIn;
`;

const Contents = styled.div`
  display: flex;
  margin-bottom: 1.2rem;

  ${media.medium} {
    flex-direction: column;
  }
`;

export default ReadWedding;
