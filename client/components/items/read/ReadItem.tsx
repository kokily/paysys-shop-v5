import React from 'react';
import styled from 'styled-components';
import { media, shadow } from '../../../styles';
import ItemButtons from './ItemButtons';
import ItemContent from './ItemContent';
import RemoveItemModal from './RemoveItemModal';

interface Props {
  item: ItemType | undefined;
  onBack: () => void;
  onEdit: () => void;
  modal: boolean;
  onModalOpen: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

function ReadItem({
  item,
  onBack,
  onEdit,
  modal,
  onModalOpen,
  onCancel,
  onConfirm,
}: Props) {
  return (
    <Container>
      <Contents>
        <h3>품목 상세보기</h3>

        <DownBorder />

        <ItemButtons
          onBack={onBack}
          onEdit={onEdit}
          onModalOpen={onModalOpen}
        />

        {item && <ItemContent item={item} />}
      </Contents>

      <RemoveItemModal
        visible={modal}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </Container>
  );
}

// Styles
const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding: 1rem;
  ${media.medium} {
    padding: 0.2rem;
  }
`;

const Contents = styled.div`
  ${shadow(1)};
  text-align: center;
  width: 80%;
  background: #dbe4ff;
  ${media.medium} {
    width: 100%;
  }
`;

const DownBorder = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 1rem;
  height: 3px;
  background: linear-gradient(to right, #12b886, #5c7cfa);
  ${media.medium} {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export default ReadItem;
