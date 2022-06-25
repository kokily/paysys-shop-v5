import type { NextPage } from 'next';
import PageTemplate from '../components/common/PageTemplate';
import Native from '../components/home/Native';
import useLoggedIn from '../libs/hooks/auth/useLoggedIn';
import useNative from '../libs/hooks/home/useNative';

const GeneralPage: NextPage = () => {
  const { user } = useLoggedIn();
  const { menu, native, onMenu } = useNative();

  return (
    <PageTemplate user={user}>
      <Native menu={menu} native={native} onMenu={onMenu} />
    </PageTemplate>
  );
};

export default GeneralPage;
