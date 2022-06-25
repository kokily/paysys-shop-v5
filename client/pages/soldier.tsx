import type { NextPage } from 'next';
import PageTemplate from '../components/common/PageTemplate';
import useLoggedIn from '../libs/hooks/auth/useLoggedIn';

const SoldierPage: NextPage = () => {
  const { user } = useLoggedIn();

  return <PageTemplate user={user}>SoldierPage</PageTemplate>;
};

export default SoldierPage;
