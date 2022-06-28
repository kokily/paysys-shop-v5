import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { changePasswordAPI } from '../../api/users';

function useChangePassword() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const changePasswordMutate = useMutation(changePasswordAPI);

  const onBack = () => {
    router.back();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangePassword = async (e: MouseEvent) => {
    if (password === '') {
      toast.warning('비밀번호를 입력하세요!');
      return;
    }

    try {
      await changePasswordMutate.mutateAsync(password);
      toast.success('비밀번호 변경');
      router.back();
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onChangePassword(e);
    }
  };

  return {
    password,
    onBack,
    onChange,
    onChangePassword,
    onKeyPress,
  };
}

export default useChangePassword;
