import React from 'react';
import styled from 'styled-components';
import { AddExpensePayload } from '../../libs/types';
import Company from './detail/Company';
import Convention from './detail/Convention';
import Event from './detail/Event';
import Hanbok from './detail/Hanbok';
import Meal from './detail/Meal';
import Prepayment from './detail/Prepayment';
import Present from './detail/Present';
import Reserve from './detail/Reserve';
import ExpenseDate from './ExpenseDate';
import ExpenseName from './ExpenseName';

interface Props {
  expense: AddExpensePayload;
}

function ExpenseContents({ expense }: Props) {
  return (
    <Container>
      <ExpenseName expense={expense} />
      <ExpenseDate expense={expense} />

      <hr style={{ width: '90%' }} />

      <Convention
        rental_husband={expense.rental_husband}
        rental_bride={expense.rental_bride}
        sword_husband={expense.sword_husband}
        sword_bride={expense.sword_bride}
        glove_husband={expense.glove_husband}
        glove_bride={expense.glove_bride}
        bouquet_husband={expense.bouquet_husband}
        bouquet_bride={expense.bouquet_bride}
        onChange={expense.onChange}
      />

      <Company
        company_husband={expense.company_husband}
        company_bride={expense.company_bride}
        rooftop_husband={expense.rooftop_husband}
        rooftop_bride={expense.rooftop_bride}
        owner_woman_husband={expense.owner_woman_husband}
        owner_woman_bride={expense.owner_woman_bride}
        owner_man_husband={expense.owner_man_husband}
        owner_man_bride={expense.owner_man_bride}
        select_husband={expense.select_husband}
        select_bride={expense.select_bride}
        frame_husband={expense.frame_husband}
        frame_bride={expense.frame_bride}
        dress_husband={expense.dress_husband}
        dress_bride={expense.dress_bride}
        hairpin_husband={expense.hairpin_husband}
        hairpin_bride={expense.hairpin_bride}
        wig_husband={expense.wig_husband}
        wig_bride={expense.wig_bride}
        video_husband={expense.video_husband}
        video_bride={expense.video_bride}
        etc_husband={expense.etc_husband}
        etc_bride={expense.etc_bride}
        onChange={expense.onChange}
      />

      <Hanbok
        hanbok_pre_husband={expense.hanbok_pre_husband}
        hanbok_pre_bride={expense.hanbok_pre_bride}
        hanbok_post_husband={expense.hanbok_post_husband}
        hanbok_post_bride={expense.hanbok_post_bride}
        onChange={expense.onChange}
      />

      <Meal
        meals={expense.meals}
        meals_price={expense.meals_price}
        meals_num_husband={expense.meals_num_husband}
        meals_num_bride={expense.meals_num_bride}
        onChange={expense.onChange}
      />

      <Present
        present={expense.present}
        present_price={expense.present_price}
        present_num_husband={expense.present_num_husband}
        present_num_bride={expense.present_num_bride}
        onChange={expense.onChange}
      />

      <Reserve
        reserve={expense.reserve}
        reserve_pay={expense.reserve_pay}
        onChange={expense.onChange}
      />

      <Prepayment
        prepayment_husband={expense.prepayment_husband}
        prepayment_bride={expense.prepayment_bride}
        onChange={expense.onChange}
      />
    </Container>
  );
}

// Styles
const Container = styled.div`
  text-align: center;
  margin-bottom: 1.25rem;

  table {
    font-size: 0.95rem;

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
      background: #9775fa;
      color: white;
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
        background: #ff8787;
      }
    }
    td {
      width: 100px;
      font-size: 0.9rem;
      overflow: hidden;
      text-align: right;
      &.sub {
        color: #1864ab;
        font-weight: bold;
      }
    }
  }
`;

export default ExpenseContents;
