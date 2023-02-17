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
  prepayment: PrepaymentType;
}

function ReadWeddingSecond({
  wedding,
  meal,
  present,
  reserve,
  prepayment,
}: Props) {
  return (
    <Container>
      <tbody>
        <Meal meal={meal} />
        <Vacuity />

        <Present present={present} />
        <Vacuity />

        <Reserve reserve={reserve} />
        <Prepayment prepayment={prepayment} />
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
