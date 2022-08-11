import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';

interface Props {
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
}

function AgreeSearch({ search, onChange, onSearch, onKeyPress }: Props) {
  return (
    <Container>
      <Input
        type="text"
        name="search"
        value={search}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <Button menu onClick={onSearch}>
        검색
      </Button>
    </Container>
  );
}

// Styles
const Container = styled.div`
  width: 350px;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Input = styled.input`
  width: 150px;
  height: 35px;
  border: 1px solid #4c6ef5;
  color: #4c6ef5;
  border-radius: 6px;
  text-align: center;
  margin-right: 10px;

  &:focus {
    background-color: #e7f6fb;
  }
`;

export default AgreeSearch;
