import type { ChangeEvent, MouseEvent } from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { addBillAPI } from '../../api/bills';
import { removeCartAPI, removeOneCartAPI, viewCartAPI } from '../../api/cart';

function useCart() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data: cart, refetch } = useQuery('cart', () => viewCartAPI(), {
    enabled: true,
    cacheTime: 0,
    retry: 0,
  });
  const [inputs, setInputs] = useState({
    title: '',
    hall: '',
    etc: ' ',
    totalAmount: 0,
  });
  const { title, hall, etc, totalAmount } = inputs;
  const [modal, setModal] = useState(false);
  const addBillMutate = useMutation(addBillAPI);
  const removeOneCartMutate = useMutation(removeOneCartAPI);
  const removeCartMutate = useMutation(removeCartAPI);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onAddBill = async (e: MouseEvent) => {
    e.preventDefault();

    if ([title, hall, etc].includes('')) {
      toast.error('빈 칸 없이 입력하세요');
      return;
    }

    try {
      const response = await addBillMutate.mutateAsync({ title, hall, etc });
      await removeCartMutate.mutateAsync();
      router.push(`/fronts/${response.id}`);
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onRemoveOneCart = async (id: string, name: string) => {
    if (window.confirm(`${name} 품목을 삭제합니다.`)) {
      await removeOneCartMutate.mutateAsync(id);
      await queryClient.clear();
      const data = await refetch();

      if (!data) {
        setInputs({ ...inputs, totalAmount: 0 });
      } else {
        CalAmount(data.data?.items || []);
      }
      toast.success('품목 삭제');
    } else {
      return;
    }
  };

  const onRemoveCart = async () => {
    try {
      await removeCartMutate.mutateAsync();
      await queryClient.clear();
      setInputs({ ...inputs, totalAmount: 0 });
      toast.success('카트 삭제');
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onModalClick = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onRemoveCart();
  };

  const CalAmount = (items: ItemType[]) => {
    let total = 0;
    let list = items;

    for (let key in list) {
      total += list[key].amount;
    }

    setInputs({ ...inputs, totalAmount: total });
  };

  useEffect(() => {
    if (cart && cart.items && cart.items.length > 0) {
      CalAmount(cart.items);
    }
  }, [cart]);

  return {
    cart,
    title,
    hall,
    etc,
    totalAmount,
    onChange,
    onAddBill,
    onRemoveOneCart,
    modal,
    onModalClick,
    onCancel,
    onConfirm,
  };
}

export default useCart;
