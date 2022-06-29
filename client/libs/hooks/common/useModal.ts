import { useState } from 'react';

interface Props {
  onRemove: () => void;
}

function useModal({ onRemove }: Props) {
  const [modal, setModal] = useState(false);

  const onModalOpen = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(true);
    onRemove();
  };

  return {
    modal,
    onModalOpen,
    onCancel,
    onConfirm,
  };
}

export default useModal;
