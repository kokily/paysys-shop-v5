import type { NextPage } from 'next';
import ListAgrees from '../../components/agrees/list/ListAgrees';
import PageTemplate from '../../components/common/PageTemplate';
import useListAgrees from '../../libs/hooks/agrees/useListAgrees';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';

const AgreesListPage: NextPage = () => {
  const { user } = useLoggedIn(true);
  const {
    agrees,
    name,
    onChange,
    onSearch,
    onKeyPress,
    onDetailAgree,
    setTarget,
  } = useListAgrees();

  return (
    <PageTemplate user={user}>
      <ListAgrees
        agrees={agrees}
        name={name}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
        onDetailAgree={onDetailAgree}
        setTarget={setTarget}
      />
    </PageTemplate>
  );
};

export default AgreesListPage;
