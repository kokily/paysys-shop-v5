import type { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import ListMenu from '../../components/menu/list/ListMenu';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useListMenu from '../../libs/hooks/menu/useListMenu';

const ListMenuPage: NextPage = () => {
  const { user } = useLoggedIn();
  const { menu, onBack, onDetailMenu } = useListMenu();

  return (
    <PageTemplate user={user}>
      <ListMenu menu={menu || []} onBack={onBack} onDetailMenu={onDetailMenu} />
    </PageTemplate>
  );
};

export default ListMenuPage;
