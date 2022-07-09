import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { removeExpenseAPI } from '../../api/expense';
import { removeSignAPI } from '../../api/sign';
import { readWeddingAPI } from '../../api/weddings';
import useModal from '../common/useModal';

function useReadWedding() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const { data: wedding, refetch } = useQuery(
    'readWedding',
    () => readWeddingAPI(id!),
    {
      enabled: true,
    }
  );
  const removeSignMutate = useMutation(removeSignAPI);
  const removeExpenseMutate = useMutation(removeExpenseAPI);

  const onBack = () => {
    router.back();
  };

  const onEdit = () => {
    router.push(`/expense/${id}`);
  };

  const onRemoveSign = async () => {
    try {
      await removeSignMutate.mutateAsync(id!);
      toast.success('서명 삭제');
      await queryClient.clear();
      await refetch();
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onRemove = async () => {
    try {
      await removeExpenseMutate.mutateAsync(id!);
      toast.success('웨딩 빌지 삭제');
      await queryClient.clear();
      router.push('/weddings');
    } catch (err: any) {
      toast.error(err);
    }
  };

  const { modal, onModalOpen, onCancel, onConfirm } = useModal({ onRemove });

  return {
    wedding,
    onBack,
    onEdit,
    onRemoveSign,
    modal,
    onModalOpen,
    onCancel,
    onConfirm,
  };
}

export default useReadWedding;
