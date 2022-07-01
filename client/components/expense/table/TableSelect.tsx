import type { ChangeEvent } from 'react';
import React from 'react';
import styled from 'styled-components';

type DataType = {
  value: string;
  title: string;
};

interface Props {
  title: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  data: DataType[];
}

function TableSelect({ title, name, value, onChange, data }: Props) {
  return (
    <tr>
      <th>{title}</th>
      <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
        <Select name={name} value={value} onChange={onChange}>
          {data.map((item) => (
            <option key={item.title} value={item.value}>
              {item.title}
            </option>
          ))}
        </Select>
      </td>
    </tr>
  );
}

// Styles
const Select = styled.select`
  padding-left: 1rem;
  padding-right: 1rem;
  border: none;
`;

export default TableSelect;
