import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { AddExpensePayload } from '../../libs/types';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  expense: AddExpensePayload;
}

function ExpenseDate({ expense }: Props) {
  return (
    <Container>
      <span>웨딩일자: </span>
      <DatePicker
        locale="ko"
        startDate={expense.wedding_at}
        selected={expense.wedding_at}
        onChange={expense.setStartDate as any}
        dateFormat="yyyy, MM dd"
      />

      <span>웨딩시간: </span>
      <select
        name="event_at"
        value={expense.event_at}
        onChange={expense.onChange}
      >
        <option value="">전체</option>
        <option value="11:30">11:30</option>
        <option value="13:00">13:00</option>
        <option value="14:30">14:30</option>
        <option value="16:00">16:00</option>
        <option value="17:30">17:30</option>
        <option value="19:00">19:00</option>
      </select>
    </Container>
  );
}

// Styles
const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  .react-datepicker-wrapper {
    width: auto;
  }
  input {
    width: 95px;
    height: 25px;
    border: 2px solid #1098ad;
    background: #22b8cf;
    color: white;
    border-radius: 3px;
    text-align: center;
    margin-right: 10px;
  }
  select {
    width: 95px;
    height: 25px;
    border: 2px solid #0ca678;
    background: #20c997;
    color: white;
    border-radius: 3px;
    text-align: center;
    margin-right: 10px;
  }
`;

export default ExpenseDate;
