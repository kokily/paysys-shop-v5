import type { ChangeEvent } from 'react';
import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function TableOneInput({ title, name, value, onChange }: Props) {
  return (
    <tr>
      <th>{title}</th>
      <td colSpan={3}>
        <Input
          type="number"
          name={name}
          value={value}
          onChange={onChange}
          style={{ textAlign: 'center' }}
        />
      </td>
    </tr>
  );
}

// Styles
const Input = styled.input`
  width: 100%;
  border: none;
  text-align: right;
`;

export default TableOneInput;
