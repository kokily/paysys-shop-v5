import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';

interface Props {
  focus?: boolean;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
}

function ItemInput({ focus, name, value, onChange, label, onKeyPress }: Props) {
  return (
    <Container>
      {focus ? (
        <Input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          required
          autoFocus
        />
      ) : (
        <Input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          required
          onKeyPress={onKeyPress}
        />
      )}
      <Bar />
      <label>{label}</label>
    </Container>
  );
}

// Styles
const Container = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  label {
    position: absolute;
    color: #212529;
    top: 12px;
    left: 0;
    transition: 0.2s ease all;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #15aabf;
  padding: 10px;
  display: block;
  width: 92%;
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    top: -10px;
    font-size: 14px;
    color: #12b886;
  }
  &:focus ~ .span:before {
    left: 0;
    right: 0;
  }
`;

const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    right: 50%;
    bottom: 0;
    background: #0c8599;
    height: 3px;
    transition: left 0.2s ease-out, right 0.2s ease-out;
  }
`;

export default ItemInput;
