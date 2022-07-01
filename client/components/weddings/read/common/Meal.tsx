import React from 'react';
import { stringAccounting } from '../../../../libs/utils';

interface Props {
  meal: MealType;
}

function Meal({ meal }: Props) {
  return (
    <>
      <tr>
        <th colSpan={4}>식사비용</th>
      </tr>
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
        <th>식대분할</th>
        <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
          {(function () {
            if (meal.meals === 'privacy') {
              return '각각 결제';
            } else if (meal.meals === 'husband') {
              return '신랑 결제';
            } else if (meal.meals === 'bride') {
              return '신부 결제';
            } else {
              return '반반 결제';
            }
          })()}
        </td>
      </tr>

      <tr>
        <th>식대단가</th>
        <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
          {stringAccounting(meal.meals_price)}원
        </td>
      </tr>

      <tr>
        <th>하객인원</th>
        <td>{meal.meals_num_husband}명</td>
        <td>{meal.meals_num_bride}명</td>
        <td className="sub">
          {meal.meals_num_husband + meal.meals_num_bride}명
        </td>
      </tr>

      <tr>
        <th>식대 총 비용</th>
        <td>{stringAccounting(meal.meals_price * meal.meals_num_husband)}원</td>
        <td>{stringAccounting(meal.meals_price * meal.meals_num_bride)}원</td>
        <td className="sub">
          {stringAccounting(
            meal.meals_price * (meal.meals_num_husband + meal.meals_num_bride)
          )}
          원
        </td>
      </tr>
    </>
  );
}

export default Meal;
