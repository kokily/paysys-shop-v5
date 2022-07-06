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

  useQuery('user', () => checkAPI(), {
    onSuccess: (data) => {
      setUser(data);
    },
    onError: () => setUser(null),
    retry: 0,
    enabled: true,
  });

  useEffect(() => {
    if (user) {
      if (link === '' || link === 'register') {
        router.push('/soldier');
      }

      if (isAdmin) {
        if (!user.admin) {
          toast.error('관리자 이용 메뉴입니다');
          router.push('/soldier');
        }
      }
    } else {
      toast.error('로그인 후 이용하세요');
      router.push('/');
    }
  }, [user, link]);

  return {
    user,
  };
}

export default useLoggedIn;
