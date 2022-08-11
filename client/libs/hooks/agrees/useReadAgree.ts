import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { readAgreeAPI, removeAgreeAPI } from '../../api/agrees';
import useModal from '../common/useModal';

function useReadAgree() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: string } = router.query;
  const { data: agree } = useQuery('readAgree', () => readAgreeAPI(id!), {
    enabled: true,
  });
  const removeAgreeMutate = useMutation(removeAgreeAPI);

  const onBack = () => {
    router.back();
  };

  const onRemove = async () => {
    try {
      await removeAgreeMutate.mutateAsync(id!);
      toast.success('동의서 삭제');
      await queryClient.clear();
      router.back();
    } catch (err: any) {
      toast.error(err);
    }
  };

  const { modal, onModalOpen, onCancel, onConfirm } = useModal({ onRemove });

  return {
    agree,
    onBack,
    modal,
    onModalOpen,
    onCancel,
    onConfirm,
  };
}

export default useReadAgree;
