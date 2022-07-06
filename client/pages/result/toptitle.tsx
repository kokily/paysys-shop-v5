import type { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';

const TopTitlePage: NextPage = () => {
  const { user } = useLoggedIn();

  return (
    <PageTemplate user={user}>TopTitle Page Under construction</PageTemplate>
  );
};

export default TopTitlePage;
