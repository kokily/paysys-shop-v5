import { useRouter } from 'next/router';
import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useState,
} from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { addCartAPI } from '../../api/cart';
import { readMenuAPI } from '../../api/menu';

function useReadMenu() {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const { data: menu } = useQuery('menu', () => readMenuAPI(id!), {
    enabled: true,
    staleTime: 100,
  });
  const addCartMutate = useMutation(addCartAPI);
  const [inputs, setInputs] = useState({
    count: 0,
    price: 0,
  });
  const { count, price } = inputs;

  const onBack = () => {
    router.back();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onAddCart = async (e: MouseEvent) => {
    e.preventDefault();

    if (count < 1 || price < 1) {
      toast.warning('단가 또는 수량을 입력하세요');
      return;
    }

    try {
      const response = await addCartMutate.mutateAsync({
        item_id: id!,
        count,
        price,
      });

      toast.success('메뉴 추가!');
      router.back();
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onAddCart(e);
    }
  };

  useEffect(() => {
    if (menu) {
      if (menu?.price !== 0) {
        setInputs({
          ...inputs,
          price: menu.price,
        });
      } else {
        setInputs({
          ...inputs,
          price: 0,
        });
      }
    }
  }, [menu]);

  return {
    menu,
    count,
    price,
    onBack,
    onChange,
    onAddCart,
    onKeyPress,
  };
}

export default useReadMenu;
