import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import useLocalStorage from 'use-local-storage';
import { listWeddingsAPI } from '../../api/weddings';
import useObserver from '../common/useObserver';

function useListWeddings() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [scrollY, setScrollY] = useLocalStorage('list_items', 0);
  const { data, fetchNextPage, refetch } = useInfiniteQuery(
    'listWeddings',
    ({ pageParam }) => listWeddingsAPI({ cursor: pageParam, date: search }),
    {
      getNextPageParam: (data) =>
        data && data.length === 40 ? data[data.length - 1].id : undefined,
    }
  );

  const weddings = useMemo(() => {
    if (!data) {
      return [];
    }

    return ([] as WeddingType[]).concat(...data.pages);
  }, [data]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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

  const onDetailWedding = (id: string) => {
    setScrollY(window.scrollY);
    router.push(`/weddings/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    weddings,
    search,
    onChange,
    onSearch,
    onKeyPress,
    onDetailWedding,
    setTarget,
  };
}

export default useListWeddings;
