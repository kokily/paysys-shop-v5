import React from 'react';
import styled from 'styled-components';
import { stringAccounting } from '../../../libs/utils';
import { media } from '../../../styles';
import Meal from './common/Meal';
import Prepayment from './common/Prepayment';
import Present from './common/Present';
import Reserve from './common/Reserve';
import Vacuity from './common/Vacuity';

interface Props {
  wedding: WeddingType;
  meal: MealType;
  present: PresentType;
  reserve: ReserveType;
  hanbok: HanbokType;
  prepayment: PrepaymentType;
}

function ReadWeddingSecond({
  wedding,
  meal,
  present,
  reserve,
  hanbok,
  prepayment,
}: Props) {
  let allCost = 0;
  let payment = 0;
  let husbandCost = 0;
  let brideCost = 0;

  if (wedding && meal && present && hanbok) {
    allCost =
      wedding.cost_husband +
      wedding.cost_bride +
      wedding.meal_husband +
      wedding.meal_bride +
      wedding.present_husband +
      wedding.present_bride;

    payment =
      wedding.cost_husband +
      wedding.cost_bride +
      wedding.meal_husband +
      wedding.meal_bride +
      wedding.present_husband +
      wedding.present_bride -
      wedding.reserve_husband -
      wedding.reserve_bride -
      hanbok.hanbok_pre_husband -
      hanbok.hanbok_pre_bride -
      (prepayment ? prepayment.prepayment_husband : 0) -
      (prepayment ? prepayment.prepayment_bride : 0);

    husbandCost =
      wedding.cost_husband +
      wedding.meal_husband +
      wedding.present_husband -
      wedding.reserve_husband -
      hanbok.hanbok_pre_husband -
      (prepayment ? prepayment.prepayment_husband : 0);

    brideCost =
      wedding.cost_bride +
      wedding.meal_bride +
      wedding.present_bride -
      wedding.reserve_bride -
      hanbok.hanbok_pre_bride -
      (prepayment ? prepayment.prepayment_bride : 0);
  }

  return (
    <Container>
      <tbody>
        <Meal meal={meal} />
        <Vacuity />

        <Present present={present} />
        <Vacuity />

        <Reserve reserve={reserve} hanbok={hanbok} />
        <Prepayment prepayment={prepayment} />

        <tr style={{ height: '165px' }}>
          <td colSpan={4} rowSpan={9} style={{ textAlign: 'center' }}>
            <h3 style={{ color: 'silver' }}>
              웨딩 총 비용: {stringAccounting(allCost)}원
            </h3>
            <h3 style={{ color: 'blue' }}>
              결제 총 비용: {stringAccounting(payment)}원
            </h3>
            <h3>신랑 총 결제비용: {stringAccounting(husbandCost)}원</h3>
            <h3>신부 총 결제비용: {stringAccounting(brideCost)}원</h3>
          </td>
        </tr>
      </tbody>
    </Container>
  );
}

// Styles
const Container = styled.table`
  font-size: 0.95rem;
  height: 100%;

  tr {
    &:hover {
      background: rgba(165, 102, 255, 0.2);
    }
  }
  th,
  td {
    border: 1px solid #ced4da;
    border-radius: 8px;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
  }
  th {
    background: #e3e0fa;
    color: #7950f2;
    width: 130px;
    &.basic {
      width: 93.3px;
    }
    &.orange {
      background: #ffa94d;
    }
    &.cyan {
      background: #3bc9db;
    }
    &.red {
      background: white;
      color: #d941c5;
    }
  }
  td {
    width: 93.3px;
    font-size: 0.9rem;
    overflow: hidden;
    text-align: right;
    &.sub {
      color: #5f3dc4;
      font-weight: bold;
    }
  }
  h3 {
    margin: 0.96rem;
  }

  ${media.medium} {
    margin-top: 1.5rem;
  }
`;

export default ReadWeddingSecond;
