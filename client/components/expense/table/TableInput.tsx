import React from 'react';
import styled from 'styled-components';
import { stringAccounting } from '../../../libs/utils';

interface Props {
  title: string;
  husband_name: string;
  husband_value: string;
  bride_name: string;
  bride_value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unit?: boolean;
}

function TableInput({
  title,
  husband_name,
  husband_value,
  bride_name,
  bride_value,
  onChange,
  unit,
}: Props) {
  return (
    <tr>
      <th>{title}</th>
      <td>
        <Input
          type="number"
          name={husband_name}
          value={husband_value}
          onChange={onChange}
        />
      </td>
      <td>
        <Input
          type="number"
          name={bride_name}
          value={bride_value}
          onChange={onChange}
        />
      </td>
      <td>
        {stringAccounting(parseInt(husband_value) + parseInt(bride_value))}
        {unit ? '명' : '원'}
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

export default TableInput;
