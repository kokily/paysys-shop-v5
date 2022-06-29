import type { NextPage } from 'next';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import PageTemplate from '../../components/common/PageTemplate';
import useListUsers from '../../libs/hooks/users/useListUsers';
import ListUsers from '../../components/users/list/ListUsers';

const ListUsersPage: NextPage = () => {
  const { user } = useLoggedIn(true);
  const {
    users,
    username,
    onChange,
    onSearch,
    onKeyPress,
    onDetailUser,
    setTarget,
  } = useListUsers();

  return (
    <PageTemplate user={user}>
      <ListUsers
        users={users}
        username={username}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
        onDetailUser={onDetailUser}
        setTarget={setTarget}
      />
    </PageTemplate>
  );
};

export default ListUsersPage;
