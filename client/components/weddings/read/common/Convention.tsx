import React from 'react';
import { stringAccounting } from '../../../../libs/utils';

interface Props {
  convention: ConventionType;
}

function Convention({ convention }: Props) {
  return (
    <>
      <tr>
        <th>구분</th>
        <th className="basic" style={{ background: 'white' }}>
          신랑
        </th>
        <th className="basic" style={{ background: 'white' }}>
          신부
        </th>
        <th className="basic" style={{ background: 'white' }}>
          계
        </th>
      </tr>

      <tr>
        <th>웨딩홀 사용료</th>
        <td>{stringAccounting(convention.rental_husband)}원</td>
        <td>{stringAccounting(convention.rental_bride)}원</td>
        <td className="sub">
          {stringAccounting(
            convention.rental_husband + convention.rental_bride
          )}
          원
        </td>
      </tr>

      <tr>
        <th>예도칼</th>
        <td>{stringAccounting(convention.sword_husband)}원</td>
        <td>{stringAccounting(convention.sword_bride)}원</td>
        <td className="sub">
          {stringAccounting(convention.sword_husband + convention.sword_bride)}
          원
        </td>
      </tr>

      <tr>
        <th>장 갑</th>
        <td>{stringAccounting(convention.glove_husband)}원</td>
        <td>{stringAccounting(convention.glove_bride)}원</td>
        <td className="sub">
          {stringAccounting(convention.glove_husband + convention.glove_bride)}
          원
        </td>
      </tr>

      <tr>
        <th>부 케</th>
        <td>{stringAccounting(convention.bouquet_husband)}원</td>
        <td>{stringAccounting(convention.bouquet_bride)}원</td>
        <td className="sub">
          {stringAccounting(
            convention.bouquet_husband + convention.bouquet_bride
          )}
          원
        </td>
      </tr>
    </>
  );
}

export default Convention;
