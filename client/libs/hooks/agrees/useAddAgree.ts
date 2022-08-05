import type { ChangeEvent, MouseEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { addAgreeAPI } from '../../api/agrees';

function useAddAgree() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    name: '',
    sign: '',
    isAgree: false,
  });
  const { name, sign, isAgree } = inputs;
  const addAgreeMutate = useMutation(addAgreeAPI);

  const onBack = () => {
    router.back();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onAddAgree = async (e: MouseEvent) => {
    e.preventDefault();

    if ([name, sign].includes('')) {
      toast.error('빈 칸 없이 입력해 주세요');
      return;
    }

    if (isAgree === false) {
      toast.error('개인정보자료 제공에 동의해 주세요');
      return;
    }

    try {
      await addAgreeMutate.mutateAsync({ name, sign, isAgree: true });
    } catch (err: any) {
      toast.error(err);
    }
  };

  return {
    name,
    sign,
    isAgree,
    onBack,
    onChange,
    onAddAgree,
  };
}

export default useAddAgree;
