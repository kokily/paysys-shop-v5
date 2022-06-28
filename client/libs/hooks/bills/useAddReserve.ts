import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { addReserveAPI } from '../../api/reserve';
import { toast } from 'react-toastify';

function useAddReserve() {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const addReserveMutate = useMutation(addReserveAPI);
  const [reserve, setReserve] = useState(0);

  const onBack = () => {
    router.back();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReserve(parseInt(e.target.value));
  };

  const onAddReserve = async (e: MouseEvent) => {
    if (reserve === 0 || !reserve) {
      toast.warning('예약금을 입력하세요');
      return;
    }

    try {
      await addReserveMutate.mutateAsync({
        bill_id: id!,
        reserve,
      });

      toast.success('예약금 입력');
      router.back();
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onAddReserve(e);
    }
  };

  return {
    reserve,
    onBack,
    onChange,
    onAddReserve,
    onKeyPress,
  };
}

export default useAddReserve;
