import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import useLocalStorage from 'use-local-storage';
import { listUsersAPI } from '../../api/users';
import useObserver from '../common/useObserver';

function useListUsers() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [scrollY, setScrollY] = useLocalStorage('list_users', 0);
  const [username, setUsername] = useState('');
  const { data, fetchNextPage, refetch } = useInfiniteQuery(
    'users',
    ({ pageParam }) => listUsersAPI({ cursor: pageParam, username }),
    {
      getNextPageParam: (data) =>
        data && data.length === 20 ? data[data.length - 1].id : undefined,
      enabled: true,
    }
  );

  const users = useMemo(() => {
    if (!data) {
      return [];
    }

    return ([] as UserType[]).concat(...data.pages);
  }, [data]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onSearch = async (e: MouseEvent) => {
    e.preventDefault();

    await queryClient.clear();
    await refetch();
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onDetailUser = (id: string) => {
    setScrollY(window.scrollY);
    router.push(`/users/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    users,
    username,
    onChange,
    onSearch,
    onKeyPress,
    onDetailUser,
    setTarget,
  };
}

export default useListUsers;
