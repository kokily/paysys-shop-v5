import Modal from '../../common/Modal';

interface Props {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

function RemoveItemModal({ visible, onCancel, onConfirm }: Props) {
  return (
    <Modal
      visible={visible}
      title="품목 삭제"
      content="해당 아이템을 삭제합니다"
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
}

export default RemoveItemModal;
