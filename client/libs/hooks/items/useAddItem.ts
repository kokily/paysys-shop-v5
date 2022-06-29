import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { addItemAPI, readItemAPI, updateItemAPI } from '../../api/items';

function useAddItem({ edit }: { edit: boolean }) {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const [inputs, setInputs] = useState({
    name: '',
    divide: '식사(뷔페)',
    native: '현역',
    unit: '',
    price: '',
  });
  const { name, divide, native, unit, price } = inputs;
  useQuery('addItem', () => readItemAPI(id!), {
    enabled: true,
    onSuccess: (data) => {
      setInputs({
        ...inputs,
        name: data.name,
        divide: data.divide,
        native: data.native,
        unit: data.unit,
        price: data.price.toString(),
      });
    },
    onError: () => {},
  });
  const addItemMutate = useMutation(addItemAPI);
  const updateItemMutate = useMutation(updateItemAPI);

  const onBack = () => {
    router.back();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onAddItem = async (e: MouseEvent) => {
    e.preventDefault();

    if ([name, divide, native, unit, price].includes('')) {
      toast.error('빈 칸 없이 입력하세요!');
      return;
    }

    try {
      if (!edit) {
        await addItemMutate.mutateAsync({
          name,
          divide,
          native,
          unit,
          price: parseInt(price),
        });
      } else {
        await updateItemMutate.mutateAsync({
          id: id!,
          name,
          divide,
          native,
          unit,
          price: parseInt(price),
        });
      }
      toast.success('품목 저장');
      router.push('/items');
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onAddItem(e);
    }
  };

  return {
    name,
    divide,
    native,
    unit,
    price,
    onBack,
    onChange,
    onAddItem,
    onKeyPress,
  };
}

export default useAddItem;
