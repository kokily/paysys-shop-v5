import type { ChangeEvent, MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { loginAPI } from '../../api/auth';
import { useUserState } from '../../context/UserContext';

function useLogin() {
  const router = useRouter();
  const [user, setUser] = useUserState();
  const loginMutate = useMutation(loginAPI);
  const [payload, setPayload] = useState({
    username: '',
    password: '',
  });
  const { username, password } = payload;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const onLogin = async (e: MouseEvent) => {
    e.preventDefault();

    if ([username, password].includes('')) {
      toast.warning('빈 칸 없이 입력해 주세요!');
      return;
    }

    try {
      const user = await loginMutate.mutateAsync(payload);
      setUser(user);
      toast.success(`${username} 님 로그인`);
      router.push('/soldier');
    } catch (err: any) {
      toast.error(err);
    }
  };

  useEffect(() => {
    if (user) {
      router.push('/soldier');
    }
  }, [user]);

  return {
    username,
    password,
    onChange,
    onLogin,
  };
}

export default useLogin;
