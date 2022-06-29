import type {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  MouseEvent,
  SetStateAction,
} from 'react';
import React from 'react';
import styled from 'styled-components';
import WeddingSearch from './WeddingSearch';
import WeddingsTable from './WeddingsTable';

interface Props {
  weddings: WeddingType[];
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
  onDetailWedding: (id: string) => void;
  setTarget: Dispatch<SetStateAction<HTMLElement | null | undefined>>;
}

function ListWeddings({
  weddings,
  search,
  onChange,
  onSearch,
  onKeyPress,
  onDetailWedding,
  setTarget,
}: Props) {
  return (
    <Container>
      <h2>웨딩 빌지 리스트</h2>

      <WeddingSearch
        search={search}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
      />

      <WeddingsTable weddings={weddings} onDetailWedding={onDetailWedding} />

      <div ref={setTarget} />
    </Container>
  );
}

// Styles
const Container = styled.div`
  h2 {
    text-align: center;
  }
`;

export default ListWeddings;
