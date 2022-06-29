import type { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import ReadItem from '../../components/items/read/ReadItem';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useReadItem from '../../libs/hooks/items/useReadItem';

const ReadItemPage: NextPage = () => {
  const { user } = useLoggedIn();
  const { item, onBack, onEdit, modal, onModalOpen, onCancel, onConfirm } =
    useReadItem();

  return (
    <PageTemplate user={user}>
      <ReadItem
        item={item}
        onBack={onBack}
        onEdit={onEdit}
        modal={modal}
        onModalOpen={onModalOpen}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </PageTemplate>
  );
};

export default ReadItemPage;
