import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { readItemAPI, removeItemAPI } from '../../api/items';
import useModal from '../common/useModal';

function useReadItem() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const { data: item } = useQuery('readItem', () => readItemAPI(id!), {
    enabled: true,
  });
  const removeItemMutate = useMutation(removeItemAPI);

  const onBack = () => {
    router.back();
  };

  const onEdit = () => {
    router.push(`/items/update/${id}`);
  };

  const onRemove = async () => {
    try {
      await removeItemMutate.mutateAsync(id!);
      toast.success('아이템 삭제');
      await queryClient.clear();
      router.back();
    } catch (err: any) {
      toast.error(err);
    }
  };

  const { modal, onModalOpen, onCancel, onConfirm } = useModal({ onRemove });

  return {
    item,
    onBack,
    onEdit,
    modal,
    onModalOpen,
    onCancel,
    onConfirm,
  };
}

export default useReadItem;
