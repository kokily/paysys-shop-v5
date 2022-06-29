import type {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  MouseEvent,
  SetStateAction,
} from 'react';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Search from '../../common/search/Search';
import Button from '../../common/Button';
import ItemsTable from './ItemsTable';

interface Props {
  items: ItemType[];
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
  onDetailItem: (id: string) => void;
  setTarget: Dispatch<SetStateAction<HTMLElement | null | undefined>>;
}

function ListItems({
  items,
  name,
  onChange,
  onSearch,
  onKeyPress,
  onDetailItem,
  setTarget,
}: Props) {
  return (
    <Container>
      <Search
        mode="품 명"
        search={name}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
      />

      <Link href="/items/add">
        <Button submit>추가하기</Button>
      </Link>

      <ItemsTable items={items} onDetailItem={onDetailItem} />

      <div ref={setTarget} />
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export default ListItems;
