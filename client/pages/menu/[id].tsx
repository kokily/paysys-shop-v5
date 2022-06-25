import type { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import ReadMenu from '../../components/menu/read/ReadMenu';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useReadMenu from '../../libs/hooks/menu/useReadMenu';

const ReadMenuPage: NextPage = () => {
  const { user } = useLoggedIn();
  const { menu, count, price, onBack, onChange, onAddCart, onKeyPress } =
    useReadMenu();

  return (
    <PageTemplate user={user}>
      <ReadMenu
        menu={menu}
        count={count}
        price={price}
        onBack={onBack}
        onChange={onChange}
        onAddCart={onAddCart}
        onKeyPress={onKeyPress}
      />
    </PageTemplate>
  );
};

export default ReadMenuPage;
