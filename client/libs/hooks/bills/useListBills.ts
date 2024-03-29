import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { listBillsAPI } from '../../api/bills';
import useObserver from '../common/useObserver';
import useLocalStorage from 'use-local-storage';

function useListBills() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [scrollY, setScrollY] = useLocalStorage('listBills', 0);
  const [inputs, setInputs] = useState({
    search: '',
    hall: '',
    user_id: '',
  });
  const { search, hall, user_id } = inputs;
  const { data, fetchNextPage, refetch } = useInfiniteQuery(
    'bills',
    ({ pageParam }) =>
      listBillsAPI({ cursor: pageParam, title: search, hall, user_id }),
    {
      getNextPageParam: (data) =>
        data && data.length === 30 ? data[data.length - 1].id : undefined,
      enabled: true,
    }
  );

  const bills = useMemo(() => {
    if (!data) {
      return [];
    }

    return ([] as BillType[]).concat(...data.pages);
  }, [data]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSearch = async (e: MouseEvent) => {
    e.preventDefault();

    if (search === '') {
      await queryClient.clear();
      await setInputs({ ...inputs, search: '' });
      await refetch();
    } else {
      await queryClient.clear();
      await setInputs({ ...inputs, search });
      await refetch();
    }
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onUserList = async (user_id: string) => {
    await queryClient.clear();
    await setInputs({ ...inputs, user_id });
    await refetch();
  };

  const onHallList = async (hall: string) => {
    await queryClient.clear();
    await setInputs({ ...inputs, hall });
    await refetch();
  };

  const onDetailBill = (id: string) => {
    setScrollY(window.scrollY);
    router.push(`/fronts/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    bills,
    search,
    onChange,
    onSearch,
    onKeyPress,
    onUserList,
    onHallList,
    onDetailBill,
    setTarget,
  };
}

export default useListBills;
