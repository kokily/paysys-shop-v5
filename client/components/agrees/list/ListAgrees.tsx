import type {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  MouseEvent,
  SetStateAction,
} from 'react';
import React from 'react';
import styled from 'styled-components';
import AgreeSearch from './AgreeSearch';
import AgreeTable from './AgreeTable';

interface Props {
  agrees: AgreeType[];
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
  onDetailAgree: (id: string) => void;
  setTarget: Dispatch<SetStateAction<HTMLElement | null | undefined>>;
}

function ListAgrees({
  agrees,
  name,
  onChange,
  onSearch,
  onKeyPress,
  onDetailAgree,
  setTarget,
}: Props) {
  return (
    <Container>
      <h2>개인정보 동의 리스트</h2>

      <AgreeSearch
        search={name}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
      />

      <AgreeTable
        agrees={agrees}
        onDetailAgree={onDetailAgree}
        setTarget={setTarget}
      />
    </Container>
  );
}

// Styles
const Container = styled.div`
  margin-bottom: 4.5rem;
  h2 {
    text-align: center;
  }
`;

export default ListAgrees;
