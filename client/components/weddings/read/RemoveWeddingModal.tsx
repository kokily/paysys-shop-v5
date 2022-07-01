import Modal from '../../common/Modal';

interface Props {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

function RemoveWeddingModal({ visible, onCancel, onConfirm }: Props) {
  return (
    <Modal
      visible={visible}
      title="웨딩 빌지"
      content="삭제하시겠습니까?"
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
}

export default RemoveWeddingModal;
