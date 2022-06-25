import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

interface Props {
  mode: string;
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
}

function Search({ mode, search, onChange, onSearch, onKeyPress }: Props) {
  return (
    <Container>
      <Contents>
        <SearchInput
          name="search"
          value={search}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder={`${mode}`}
        />
        <SearchButton onSearch={onSearch} />
      </Contents>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Contents = styled.div`
  width: 320px;
  padding: 5px;
  background: #444;
  background: rgba(103, 153, 255, 0.12);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4) inset,
    0 1px 0 rgba(255, 255, 255, 0.2);
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4) inset,
    0 1px 0 rgba(255, 255, 255, 0.2);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4) inset,
    0 1px 0 rgba(255, 255, 255, 0.2);
`;

export default Search;
