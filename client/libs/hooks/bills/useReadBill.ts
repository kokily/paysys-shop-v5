import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { readBillAPI, removeBillAPI, restoreBillAPI } from '../../api/bills';
import { removeReserveAPI } from '../../api/reserve';
import { toast } from 'react-toastify';

function useReadBill() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const { data: bill, refetch } = useQuery('bill', () => readBillAPI(id!), {
    enabled: true,
    staleTime: 100,
  });
  const [modal, setModal] = useState(false);
  const restoreBillMutate = useMutation(restoreBillAPI);
  const removeReserveMutate = useMutation(removeReserveAPI);
  const removeBillMutate = useMutation(removeBillAPI);

  const onBack = () => {
    router.back();
  };

  const onRestore = async () => {
    if (window.confirm('⭐︎ 주의!! 빌지는 삭제되고 카트로 다시 돌아갑니다!')) {
      try {
        await restoreBillMutate.mutateAsync(id!);
        queryClient.invalidateQueries(['bill', 'bills']);
        router.push('/cart');
      } catch (err: any) {
        toast.error(err);
      }
    }
  };

  const onReserve = () => {
    router.push(`/fronts/update/${id}`);
  };

  const onRemoveReserve = async () => {
    try {
      await removeReserveMutate.mutateAsync(id!);
      queryClient.invalidateQueries(['bill', 'bills']);
      await refetch();
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onRemoveBill = async () => {
    try {
      await removeBillMutate.mutateAsync(id!);
      queryClient.invalidateQueries(['bill', 'bills']);
      router.push('/fronts');
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
    onRemoveBill();
  };

  return {
    front: bill,
    onBack,
    onRestore,
    onReserve,
    onRemoveReserve,
    modal,
    onModalClick,
    onCancel,
    onConfirm,
  };
}

export default useReadBill;
