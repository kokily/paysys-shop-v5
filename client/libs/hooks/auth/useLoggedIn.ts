import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { checkAPI } from '../../api/auth';
import { useUserState } from '../../context/UserContext';

function useLoggedIn(isAdmin?: boolean) {
  const router = useRouter();
  const [user, setUser] = useUserState();
  const [link] = useState(router.pathname.substring(1));

  const { isLoading } = useQuery('user', () => checkAPI(), {
    onSuccess: (data) => setUser(data),
    onError: () => setUser(null),
    retry: 0,
    enabled: true,
  });

  useEffect(() => {
    if (!isLoading) {
      if (link === '' || link === 'register') {
        if (user) {
          router.push('/soldier');
        }
      } else {
        if (!user) {
          toast.warning('로그인 후 이용하세요');
          router.push('/');
        }
      }
    }

    if (isAdmin) {
      if (!isLoading && user?.admin === false) {
        alert('관리자만 이용할 수 있습니다');
        router.push('/');
      }
    }
  }, [user]);

  return {
    user,
  };
}

export default useLoggedIn;
