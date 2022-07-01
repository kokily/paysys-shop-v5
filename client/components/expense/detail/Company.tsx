import type { ChangeEvent } from 'react';
import React from 'react';
import TableInput from '../table/TableInput';

export type ExpenseCompanyType = {
  company_husband: string;
  company_bride: string;
  rooftop_husband: string;
  rooftop_bride: string;
  owner_woman_husband: string;
  owner_woman_bride: string;
  owner_man_husband: string;
  owner_man_bride: string;
  select_husband: string;
  select_bride: string;
  frame_husband: string;
  frame_bride: string;
  dress_husband: string;
  dress_bride: string;
  hairpin_husband: string;
  hairpin_bride: string;
  wig_husband: string;
  wig_bride: string;
  video_husband: string;
  video_bride: string;
  etc_husband: string;
  etc_bride: string;
};

interface Props extends ExpenseCompanyType {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

function Company({
  company_husband,
  company_bride,
  rooftop_husband,
  rooftop_bride,
  owner_woman_husband,
  owner_woman_bride,
  owner_man_husband,
  owner_man_bride,
  select_husband,
  select_bride,
  frame_husband,
  frame_bride,
  dress_husband,
  dress_bride,
  hairpin_husband,
  hairpin_bride,
  wig_husband,
  wig_bride,
  video_husband,
  video_bride,
  etc_husband,
  etc_bride,
  onChange,
}: Props) {
  return (
    <>
      <h3>웨딩업체</h3>

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
            title="웨딩업체"
            husband_name="company_husband"
            husband_value={company_husband}
            bride_name="company_bride"
            bride_value={company_bride}
            onChange={onChange}
          />

          <TableInput
            title="야간옥상전구"
            husband_name="rooftop_husband"
            husband_value={rooftop_husband}
            bride_name="rooftop_bride"
            bride_value={rooftop_bride}
            onChange={onChange}
          />

          <TableInput
            title="메이크업(여)"
            husband_name="owner_woman_husband"
            husband_value={owner_woman_husband}
            bride_name="owner_woman_bride"
            bride_value={owner_woman_bride}
            onChange={onChange}
          />

          <TableInput
            title="메이크업(남)"
            husband_name="owner_man_husband"
            husband_value={owner_man_husband}
            bride_name="owner_man_bride"
            bride_value={owner_man_bride}
            onChange={onChange}
          />

          <TableInput
            title="셀 렉"
            husband_name="select_husband"
            husband_value={select_husband}
            bride_name="select_bride"
            bride_value={select_bride}
            onChange={onChange}
          />

          <TableInput
            title="액 자"
            husband_name="frame_husband"
            husband_value={frame_husband}
            bride_name="frame_bride"
            bride_value={frame_bride}
            onChange={onChange}
          />

          <TableInput
            title="드레스"
            husband_name="dress_husband"
            husband_value={dress_husband}
            bride_name="dress_bride"
            bride_value={dress_bride}
            onChange={onChange}
          />

          <TableInput
            title="헤어피스"
            husband_name="hairpin_husband"
            husband_value={hairpin_husband}
            bride_name="hairpin_bride"
            bride_value={hairpin_bride}
            onChange={onChange}
          />

          <TableInput
            title="가 발"
            husband_name="wig_husband"
            husband_value={wig_husband}
            bride_name="wig_bride"
            bride_value={wig_bride}
            onChange={onChange}
          />

          <TableInput
            title="비디오촬영"
            husband_name="video_husband"
            husband_value={video_husband}
            bride_name="video_bride"
            bride_value={video_bride}
            onChange={onChange}
          />

          <TableInput
            title="기 타"
            husband_name="etc_husband"
            husband_value={etc_husband}
            bride_name="etc_bride"
            bride_value={etc_bride}
            onChange={onChange}
          />
        </tbody>
      </table>
    </>
  );
}

export default Company;
