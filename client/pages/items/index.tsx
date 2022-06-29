import type { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import ListItems from '../../components/items/list/ListItems';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useListItems from '../../libs/hooks/items/useListItems';

const ListItemsPage: NextPage = () => {
  const { user } = useLoggedIn(true);
  const {
    items,
    name,
    onChange,
    onSearch,
    onKeyPress,
    onDetailItem,
    setTarget,
  } = useListItems();

  return (
    <PageTemplate user={user}>
      <ListItems
        items={items}
        name={name}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
        onDetailItem={onDetailItem}
        setTarget={setTarget}
      />
    </PageTemplate>
  );
};

export default ListItemsPage;
