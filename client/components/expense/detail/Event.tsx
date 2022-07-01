import type { ChangeEvent } from 'react';
import React from 'react';
import TableInput from '../table/TableInput';

export type ExpenseEventType = {
  play_husband: string;
  play_bride: string;
  anthem_husband: string;
  anthem_bride: string;
  moderator_husband: string;
  moderator_bride: string;
  officiate_husband: string;
  officiate_bride: string;
};

interface Props extends ExpenseEventType {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

function Event({
  play_husband,
  play_bride,
  anthem_husband,
  anthem_bride,
  moderator_husband,
  moderator_bride,
  officiate_husband,
  officiate_bride,
  onChange,
}: Props) {
  return (
    <>
      <h3>이벤트 비용</h3>

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
            title="연 주"
            husband_name="play_husband"
            husband_value={play_husband}
            bride_name="play_bride"
            bride_value={play_bride}
            onChange={onChange}
          />

          <TableInput
            title="축 가"
            husband_name="anthem_husband"
            husband_value={anthem_husband}
            bride_name="anthem_bride"
            bride_value={anthem_bride}
            onChange={onChange}
          />

          <TableInput
            title="사회자"
            husband_name="moderator_husband"
            husband_value={moderator_husband}
            bride_name="moderator_bride"
            bride_value={moderator_bride}
            onChange={onChange}
          />

          <TableInput
            title="주 례"
            husband_name="officiate_husband"
            husband_value={officiate_husband}
            bride_name="officiate_bride"
            bride_value={officiate_bride}
            onChange={onChange}
          />
        </tbody>
      </table>
    </>
  );
}

export default Event;
