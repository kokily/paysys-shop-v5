import type { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
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

  return <PageTemplate user={user}>Readwedding</PageTemplate>;
};

export default ReadWeddingPage;
