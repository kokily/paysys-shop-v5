import type { ChangeEvent } from 'react';
import React from 'react';
import TableInput from '../table/TableInput';

export type ExpenseReserveType = {
  prepayment_husband: string;
  prepayment_bride: string;
};

interface Props extends ExpenseReserveType {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

function Prepayment({ prepayment_husband, prepayment_bride, onChange }: Props) {
  return (
    <>
      <h3>선결제</h3>

      <table>
        <tbody>
          <tr>
            <th>구 분</th>
            <th className="basic" style={{ background: 'skyblue' }}>
              신랑
            </th>
            <th className="basic" style={{ background: 'pink' }}>
              신부
            </th>
            <th className="basic red">계</th>
          </tr>

          <TableInput
            title="선결제"
            husband_name="prepayment_husband"
            husband_value={prepayment_husband}
            bride_name="prepayment_bride"
            bride_value={prepayment_bride}
            onChange={onChange}
          />
        </tbody>
      </table>
    </>
  );
}

export default Prepayment;
