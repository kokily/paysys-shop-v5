import type { NextPage } from 'next';
import PageTemplate from '../components/common/PageTemplate';
import ChangePassword from '../components/users/password/ChangePassword';
import useLoggedIn from '../libs/hooks/auth/useLoggedIn';
import useChangePassword from '../libs/hooks/users/useChangePassword';

const ChangePasswordPage: NextPage = () => {
  const { user } = useLoggedIn();
  const { password, onBack, onChange, onChangePassword, onKeyPress } =
    useChangePassword();

  return (
    <PageTemplate user={user}>
      <ChangePassword
        password={password}
        onBack={onBack}
        onChange={onChange}
        onChangePassword={onChangePassword}
        onKeyPress={onKeyPress}
      />
    </PageTemplate>
  );
};

export default ChangePasswordPage;
