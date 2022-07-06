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

      if (link === '' || link === 'register') {
        router.push('/soldier');
      }

      if (isAdmin) {
        console.log('여기');
        if (!data.admin) {
          toast.error('관리자 이용 메뉴입니다!');
          router.push('/soldier');
        }
      }
    },
    onError: (err: any) => {
      setUser(null);
      toast.error(err);
      router.push('/');
    },
    enabled: true,
  });

  return {
    user,
  };
}

export default useLoggedIn;
