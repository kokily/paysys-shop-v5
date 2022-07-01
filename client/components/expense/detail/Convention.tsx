import type { ChangeEvent } from 'react';
import React from 'react';
import TableInput from '../table/TableInput';

export type ExpenseConventionType = {
  rental_husband: string;
  rental_bride: string;
  sword_husband: string;
  sword_bride: string;
  glove_husband: string;
  glove_bride: string;
  bouquet_husband: string;
  bouquet_bride: string;
  ceremony_husband: string;
  ceremony_bride: string;
};

interface Props extends ExpenseConventionType {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

function Convention({
  rental_husband,
  rental_bride,
  sword_husband,
  sword_bride,
  glove_husband,
  glove_bride,
  bouquet_husband,
  bouquet_bride,
  ceremony_husband,
  ceremony_bride,
  onChange,
}: Props) {
  return (
    <>
      <h3>컨벤션 비용</h3>

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
            title="웨딩홀 사용료"
            husband_name="rental_husband"
            husband_value={rental_husband}
            bride_name="rental_bride"
            bride_value={rental_bride}
            onChange={onChange}
          />

          <TableInput
            title="예도칼"
            husband_name="sword_husband"
            husband_value={sword_husband}
            bride_name="sword_bride"
            bride_value={sword_bride}
            onChange={onChange}
          />

          <TableInput
            title="장 갑"
            husband_name="glove_husband"
            husband_value={glove_husband}
            bride_name="glove_bride"
            bride_value={glove_bride}
            onChange={onChange}
          />

          <TableInput
            title="부 케"
            husband_name="bouquet_husband"
            husband_value={bouquet_husband}
            bride_name="bouquet_bride"
            bride_value={bouquet_bride}
            onChange={onChange}
          />

          <TableInput
            title="폐백음식"
            husband_name="ceremony_husband"
            husband_value={ceremony_husband}
            bride_name="ceremony_bride"
            bride_value={ceremony_bride}
            onChange={onChange}
          />
        </tbody>
      </table>
    </>
  );
}

export default Convention;
