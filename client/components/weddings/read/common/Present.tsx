import React from 'react';
import { stringAccounting } from '../../../../libs/utils';

interface Props {
  present: PresentType;
}

function Present({ present }: Props) {
  return (
    <>
      <tr>
        <th colSpan={4}>답례품 비용</th>
      </tr>

      <tr>
        <th>답례품 분할</th>
        <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
          {(function () {
            if (present.present === 'privacy') {
              return '각각 결제';
            } else if (present.present === 'husband') {
              return '신랑 결제';
            } else if (present.present === 'bride') {
              return '신부 결제';
            } else {
              return '반반 결제';
            }
          })()}
        </td>
      </tr>

      <tr>
        <th>답례품 단가</th>
        <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
          {stringAccounting(present.present_price)}원
        </td>
      </tr>

      <tr>
        <th>하객 인원</th>
        <td>{stringAccounting(present.present_num_husband)}명</td>
        <td>{stringAccounting(present.present_num_bride)}명</td>
        <td className="sub">
          {stringAccounting(
            present.present_num_husband + present.present_num_bride
          )}
          명
        </td>
      </tr>

      <tr>
        <th>답례품 총 비용</th>
        <td>
          {stringAccounting(
            present.present_price * present.present_num_husband
          )}
          원
        </td>
        <td>
          {stringAccounting(present.present_price * present.present_num_bride)}
          원
        </td>
        <td className="sub">
          {stringAccounting(
            present.present_price *
              (present.present_num_husband + present.present_num_bride)
          )}
          원
        </td>
      </tr>
    </>
  );
}

export default Present;
