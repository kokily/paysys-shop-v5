import type { NextPage } from 'next';
import AuthTemplate from '../components/auth/common/AuthTemplate';
import Login from '../components/auth/Login';
import useLogin from '../libs/hooks/auth/useLogin';

const IndexPage: NextPage = () => {
  const { username, password, onChange, onLogin } = useLogin();

  return (
    <AuthTemplate mode="login">
      <Login
        username={username}
        password={password}
        onChange={onChange}
        onLogin={onLogin}
      />
    </AuthTemplate>
  );
};

export default IndexPage;
