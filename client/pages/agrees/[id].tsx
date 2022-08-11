import type { NextPage } from 'next';
import ReadAgree from '../../components/agrees/read/ReadAgree';
import useReadAgree from '../../libs/hooks/agrees/useReadAgree';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';

const ReadAgreePage: NextPage = () => {
  useLoggedIn(true);
  const { agree, onBack, modal, onModalOpen, onConfirm, onCancel } =
    useReadAgree();

  return (
    <ReadAgree
      agree={agree}
      onBack={onBack}
      modal={modal}
      onModalOpen={onModalOpen}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default ReadAgreePage;
