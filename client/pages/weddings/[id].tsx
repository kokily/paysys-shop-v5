import type { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import ReadWedding from '../../components/weddings/read/ReadWedding';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useReadWedding from '../../libs/hooks/weddings/useReadWedding';

const ReadWeddingPage: NextPage = () => {
  const { user } = useLoggedIn(true);
  const {
    wedding,
    onBack,
    onEdit,
    onRemoveSign,
    modal,
    onModalOpen,
    onCancel,
    onConfirm,
  } = useReadWedding();

  return (
    <PageTemplate user={user}>
      <ReadWedding
        wedding={wedding}
        onBack={onBack}
        onEdit={onEdit}
        onRemoveSign={onRemoveSign}
        modal={modal}
        onModalOpen={onModalOpen}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </PageTemplate>
  );
};

export default ReadWeddingPage;
