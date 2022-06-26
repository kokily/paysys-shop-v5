import type { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import ReadFront from '../../components/fronts/read/ReadFront';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useReadBill from '../../libs/hooks/bills/useReadBill';

const ReadFrontPage: NextPage = () => {
  const { user } = useLoggedIn();
  const {
    front,
    onBack,
    onRestore,
    onReserve,
    onRemoveReserve,
    modal,
    onModalClick,
    onCancel,
    onConfirm,
  } = useReadBill();

  return (
    <PageTemplate user={user}>
      <ReadFront
        front={front}
        user={user}
        onBack={onBack}
        onRestore={onRestore}
        onReserve={onReserve}
        onRemoveReserve={onRemoveReserve}
        modal={modal}
        onModalClick={onModalClick}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </PageTemplate>
  );
};

export default ReadFrontPage;
