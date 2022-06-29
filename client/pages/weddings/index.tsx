import type { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import ListWeddings from '../../components/weddings/list/ListWeddings';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useListWeddings from '../../libs/hooks/weddings/useListWeddings';

const ListWeddingsPage: NextPage = () => {
  const { user } = useLoggedIn(true);
  const {
    weddings,
    search,
    onChange,
    onSearch,
    onKeyPress,
    onDetailWedding,
    setTarget,
  } = useListWeddings();

  return (
    <PageTemplate user={user}>
      <ListWeddings
        weddings={weddings}
        search={search}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
        onDetailWedding={onDetailWedding}
        setTarget={setTarget}
      />
    </PageTemplate>
  );
};

export default ListWeddingsPage;
