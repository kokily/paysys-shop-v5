import type { ChangeEvent } from 'react';
import React from 'react';
import TableOneInput from '../table/TableOneInput';
import TableSelect from '../table/TableSelect';

export type ExpenseReserveType = {
  reserve: string;
  reserve_pay: string;
};

interface Props extends ExpenseReserveType {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

function Reserve({ reserve, reserve_pay, onChange }: Props) {
  const provider = [
    { title: '예약금 반반', value: 'half' },
    { title: '예약금 신랑', value: 'husband' },
    { title: '예약금 신부', value: 'bride' },
  ];

  return (
    <>
      <h3>예약금</h3>

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

          <TableSelect
            title="예약금 분할"
            name="reserve"
            value={reserve}
            onChange={onChange}
            data={provider}
          />

          <TableOneInput
            title="예약금"
            name="reserve_pay"
            value={reserve_pay}
            onChange={onChange}
          />
        </tbody>
      </table>
    </>
  );
}

export default Reserve;
