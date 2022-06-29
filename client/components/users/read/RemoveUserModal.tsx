import Modal from '../../common/Modal';

interface Props {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

function RemoveUserModal({ visible, onCancel, onConfirm }: Props) {
  return (
    <Modal
      visible={visible}
      title="사용자 삭제"
      content="이 사용자를 정말 삭제하나요?"
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
}

export default RemoveUserModal;
