import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
  placeholder: string;
}

function SearchInput({
  name,
  value,
  onChange,
  onKeyPress,
  placeholder,
}: Props) {
  return (
    <Input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={`${placeholder}`}
    />
  );
}

// Styles
const Input = styled.input`
  width: 250px;
  height: 40px;
  padding: 10px 5px;
  float: left;
  font-size: 1rem;
  border: 0;
  background: #3bc9db;
  color: white;
  -moz-border-radius: 3px 0 0 3px;
  -webkit-border-radius: 3px 0 0 3px;
  border-radius: 3px 0 0 3px;
  &::placeholder {
    color: white;
  }
  &:focus {
    color: #5f3dc4;
    outline: 0;
    background: #fff;
    -moz-box-shadow: 0 0 2px rgba(0, 0, 0, 0.8) inset;
    -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.8) inset;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.8) inset;
  }
`;

export default SearchInput;
