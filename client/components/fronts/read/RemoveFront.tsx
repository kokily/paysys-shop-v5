import Modal from '../../common/Modal';

interface Props {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

function RemoveFront({ visible, onConfirm, onCancel }: Props) {
  return (
    <Modal
      visible={visible}
      title="빌지 삭제"
      content="확인을 누르시면 삭제됩니다"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}

export default RemoveFront;
