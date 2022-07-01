import React from 'react';
import { stringAccounting } from '../../../../libs/utils';

interface Props {
  company: CompanyType;
}

function Company({ company }: Props) {
  return (
    <>
      <tr>
        <th>웨딩업체</th>
        <td>{stringAccounting(company.company_husband)}원</td>
        <td>{stringAccounting(company.company_bride)}원</td>
        <td className="sub">
          {stringAccounting(company.company_husband + company.company_bride)}원
        </td>
      </tr>

      <tr>
        <th>야간옥상전구</th>
        <td>{stringAccounting(company.rooftop_husband)}원</td>
        <td>{stringAccounting(company.rooftop_bride)}원</td>
        <td className="sub">
          {stringAccounting(company.rooftop_husband + company.rooftop_bride)}원
        </td>
      </tr>

      <tr>
        <th>메이크업(여)</th>
        <td>{stringAccounting(company.owner_woman_husband)}원</td>
        <td>{stringAccounting(company.owner_woman_bride)}원</td>
        <td className="sub">
          {stringAccounting(
            company.owner_woman_husband + company.owner_woman_bride
          )}
          원
        </td>
      </tr>

      <tr>
        <th>메이크업(남)</th>
        <td>{stringAccounting(company.owner_man_husband)}원</td>
        <td>{stringAccounting(company.owner_man_bride)}원</td>
        <td className="sub">
          {stringAccounting(
            company.owner_man_husband + company.owner_man_bride
          )}
          원
        </td>
      </tr>

      <tr>
        <th>셀 렉</th>
        <td>{stringAccounting(company.select_husband)}원</td>
        <td>{stringAccounting(company.select_bride)}원</td>
        <td className="sub">
          {stringAccounting(company.select_husband + company.select_bride)}원
        </td>
      </tr>

      <tr>
        <th>액 자</th>
        <td>{stringAccounting(company.frame_husband)}원</td>
        <td>{stringAccounting(company.frame_bride)}원</td>
        <td className="sub">
          {stringAccounting(company.frame_husband + company.frame_bride)}원
        </td>
      </tr>

      <tr>
        <th>드레스</th>
        <td>{stringAccounting(company.dress_husband)}원</td>
        <td>{stringAccounting(company.dress_bride)}원</td>
        <td className="sub">
          {stringAccounting(company.dress_husband + company.dress_bride)}원
        </td>
      </tr>

      <tr>
        <th>헤어피스</th>
        <td>{stringAccounting(company.hairpin_husband)}원</td>
        <td>{stringAccounting(company.hairpin_bride)}원</td>
        <td className="sub">
          {stringAccounting(company.hairpin_husband + company.hairpin_bride)}원
        </td>
      </tr>

      <tr>
        <th>가 발</th>
        <td>{stringAccounting(company.wig_husband)}원</td>
        <td>{stringAccounting(company.wig_bride)}원</td>
        <td className="sub">
          {stringAccounting(company.wig_husband + company.wig_bride)}원
        </td>
      </tr>

      <tr>
        <th>비디오촬영</th>
        <td>{stringAccounting(company.video_husband)}원</td>
        <td>{stringAccounting(company.video_bride)}원</td>
        <td className="sub">
          {stringAccounting(company.video_husband + company.video_bride)}원
        </td>
      </tr>

      <tr>
        <th>기 타</th>
        <td>{stringAccounting(company.etc_husband)}원</td>
        <td>{stringAccounting(company.etc_bride)}원</td>
        <td className="sub">
          {stringAccounting(company.etc_husband + company.etc_bride)}원
        </td>
      </tr>
    </>
  );
}

export default Company;
