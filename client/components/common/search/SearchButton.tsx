import type { MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';

interface Props {
  onSearch: (e: MouseEvent) => void;
}

function SearchButton({ onSearch }: Props) {
  return <Container onClick={onSearch}>검색</Container>;
}

// Styles
const Container = styled.button`
  overflow: visible;
  position: relative;
  float: right;
  border: 0;
  padding: 0;
  cursor: pointer;
  width: 60px;
  height: 40px;
  color: #fff;
  font-size: 1rem;
  background: #1098ad;
  -webkit-border-radius: 0 3px 3px 0;
  -moz-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
  &:-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  &:hover {
    background: #22b8cf;
    &:before {
      border-right-color: #22b8cf;
    }
  }
  &:active,
  &:focus {
    background: #0c8599;
    transform: translateX(-4px);
    &:before {
      border-right-color: #0c8599;
    }
  }
  &:before {
    content: '';
    position: absolute;
    border-width: 8px 8px 8px 0;
    border-style: solid solid solid none;
    border-color: transparent #1098ad transparent;
    top: 12px;
    left: -6px;
  }
`;

export default SearchButton;
