import type {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  MouseEvent,
  SetStateAction,
} from 'react';
import React, { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import styled from 'styled-components';
import { media } from '../../../styles';
import Search from '../../common/search/Search';
import FrontsContents from './FrontsContents';

interface Props {
  bills: BillType[];
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
  onUserList: (user_id: string) => void;
  onHallList: (hall: string) => void;
  onDetailBill: (id: string) => void;
  setTarget: Dispatch<SetStateAction<HTMLElement | null | undefined>>;
}

function ListFronts({
  bills,
  search,
  onChange,
  onSearch,
  onKeyPress,
  onUserList,
  onHallList,
  onDetailBill,
  setTarget,
}: Props) {
  const [scrollY] = useLocalStorage('bills_list', 0);

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return (
    <Container>
      <h2>프런트 전표 현황</h2>

      <Search
        mode="행사명"
        search={search}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
      />

      <FrontsContents
        bills={bills}
        onUserList={onUserList}
        onHallList={onHallList}
        onDetailBill={onDetailBill}
      />
      <div ref={setTarget} />
    </Container>
  );
}

// Styles
const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  ${media.xsmall} {
    width: 100%;
  }
`;

export default ListFronts;
