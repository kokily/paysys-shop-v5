import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import useLocalStorage from 'use-local-storage';
import useObserver from '../common/useObserver';
import { listAgreesAPI } from '../../api/agrees';

function useListAgrees() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [scrollY, setScrollY] = useLocalStorage('list_agrees', 0);
  const [name, setName] = useState('');
  const { data, fetchNextPage, refetch } = useInfiniteQuery(
    'listAgrees',
    ({ pageParam }) => listAgreesAPI({ cursor: pageParam, name }),
    {
      getNextPageParam: (data) =>
        data && data.length === 30 ? data[data.length - 1].id : undefined,
      enabled: true,
    }
  );

  const agrees = useMemo(() => {
    if (!data) {
      return [];
    }

    return ([] as AgreeType[]).concat(...data.pages);
  }, [data]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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

  const onDetailAgree = (id: string) => {
    setScrollY(window.scrollY);
    router.push(`/agrees/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    agrees,
    name,
    onChange,
    onSearch,
    onKeyPress,
    onDetailAgree,
    setTarget,
  };
}

export default useListAgrees;
