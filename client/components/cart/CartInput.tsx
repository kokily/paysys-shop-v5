import type { ChangeEvent } from 'react';
import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  value: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  small?: boolean;
}

function CartInput({ name, value, label, onChange, small }: Props) {
  return (
    <Container>
      <Input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required
      />
      <Bar />
      <Label htmlFor={name}>
        {label} {small && <small>필수</small>}
      </Label>
    </Container>
  );
}

// Styles
const Container = styled.div`
  position: relative;
  width: 100%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 30px;
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
  &:focus ~ span:before {
    left: 0;
    right: 0;
  }
`;

const Label = styled.label`
  position: absolute;
  color: #212529;
  top: 12px;
  left: 0;
  transition: 0.2s ease all;
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

export default CartInput;
