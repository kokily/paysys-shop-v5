import type { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import ReadUser from '../../components/users/read/ReadUser';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useReadUser from '../../libs/hooks/users/useReadUser';

const ReadUserPage: NextPage = () => {
  const { user } = useLoggedIn();
  const {
    data,
    onUsersList,
    onSetAdmin,
    onSetEmployee,
    modal,
    onModalOpen,
    onCancel,
    onConfirm,
  } = useReadUser();

  return (
    <PageTemplate user={user}>
      <ReadUser
        user={data}
        onUsersList={onUsersList}
        onSetAdmin={onSetAdmin}
        onSetEmployee={onSetEmployee}
        modal={modal}
        onModalOpen={onModalOpen}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </PageTemplate>
  );
};

export default ReadUserPage;
