import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Button from '../../common/Button';

interface Props {
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
}

function WeddingSearch({ search, onChange, onSearch, onKeyPress }: Props) {
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
      <Link href="/expense">
        <Anchor>웨딩추가</Anchor>
      </Link>
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

const Anchor = styled.a`
  width: 95px;
  float: 1;
  font-size: 0.9rem;
  margin: 1rem 1rem 1rem 0.5rem;
  padding: 0.5rem 0.5rem 0.4rem 0.5rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 700;
  transition: 0.3s;
  cursor: pointer;
  border: 2px solid #e03131;
  color: #e03131;
  &:hover {
    color: white;
    border: 2px solid #e8590c;
    background: #e03131;
  }
`;

const Input = styled.input`
  width: 95px;
  height: 25px;
  border: 2px solid #1098ad;
  background: #22b8cf;
  color: white;
  border-radius: 3px;
  text-align: center;
  margin-right: 10px;
`;

export default WeddingSearch;
