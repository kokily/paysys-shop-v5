import type { NextPage } from 'next';
import useLoggedIn from '../libs/hooks/auth/useLoggedIn';

const RegisterPage: NextPage = () => {
  const { user } = useLoggedIn();

  return <h1>현재 등록을 받고 있지 않습니다.</h1>;
};

export default RegisterPage;
