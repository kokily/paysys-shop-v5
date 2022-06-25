import type { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import ListFronts from '../../components/fronts/list/ListFronts';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useListBills from '../../libs/hooks/bills/useListBills';

const ListFrontsPage: NextPage = () => {
  const { user } = useLoggedIn();
  const {
    bills,
    search,
    onChange,
    onSearch,
    onKeyPress,
    onUserList,
    onHallList,
    onDetailBill,
    setTarget,
  } = useListBills();

  return (
    <PageTemplate user={user}>
      <ListFronts
        bills={bills}
        search={search}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
        onUserList={onUserList}
        onHallList={onHallList}
        onDetailBill={onDetailBill}
        setTarget={setTarget}
      />
    </PageTemplate>
  );
};

export default ListFrontsPage;
