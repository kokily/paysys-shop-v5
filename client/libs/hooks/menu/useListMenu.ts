import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useQuery, useQueryClient } from 'react-query';
import { listMenuAPI } from '../../api/menu';

type QueryType = {
  divide?: string;
  native?: string;
};

function useListMenu() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { divide, native }: QueryType = router.query;
  const { data } = useQuery('listMenu', () => listMenuAPI({ divide, native }), {
    enabled: true,
    staleTime: 100,
  });

  const onBack = useCallback(() => {
    router.back();
  }, [router]);

  const onDetailMenu = useCallback(
    (id: string) => {
      queryClient.invalidateQueries('listMenu');
      router.push(`/menu/${id}`);
    },
    [router]
  );

  return {
    menu: data,
    onBack,
    onDetailMenu,
  };
}

export default useListMenu;
