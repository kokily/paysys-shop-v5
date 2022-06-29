import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { readUserAPI, removeUserAPI, setAdminAPI } from '../../api/users';
import useModal from '../common/useModal';

function useReadUser() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const { data, refetch } = useQuery('readUser', () => readUserAPI(id!), {
    enabled: true,
  });
  const setAdminMutate = useMutation(setAdminAPI);
  const removeUserMutate = useMutation(removeUserAPI);

  const onUsersList = () => {
    router.push('/users');
  };

  const onSetAdmin = async () => {
    await setAdminMutate.mutateAsync({ id: id!, isAdmin: true });
    await queryClient.invalidateQueries('readUser');
  };

  const onSetEmployee = async () => {
    await setAdminMutate.mutateAsync({ id: id!, isAdmin: false });
    await queryClient.invalidateQueries('readUser');
  };

  const onRemove = async () => {
    try {
      await removeUserMutate.mutateAsync(id!);
      toast.success('사용자 삭제');
      queryClient.invalidateQueries(['users', 'readUser']);
      router.back();
    } catch (err: any) {
      toast.error(err);
    }
  };

  const { modal, onModalOpen, onCancel, onConfirm } = useModal({ onRemove });

  return {
    data,
    onUsersList,
    onSetAdmin,
    onSetEmployee,
    modal,
    onModalOpen,
    onCancel,
    onConfirm,
  };
}

export default useReadUser;
