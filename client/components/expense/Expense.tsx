import React from 'react';
import styled from 'styled-components';
import { AddExpensePayload } from '../../libs/types';
import { media, shadow } from '../../styles';
import ExpenseButtons from './ExpenseButtons';
import ExpenseContents from './ExpenseContents';

interface Props {
  edit?: boolean;
  expense: AddExpensePayload;
}

function Expense({ edit, expense }: Props) {
  return (
    <Container>
      <Title>웨딩 정산 {edit ? '수정' : '작성'}</Title>

      <ExpenseContents expense={expense} />

      <ExpenseButtons onBack={expense.onBack} onSubmit={expense.onAddExpense} />
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
  ${shadow(1)}
  animation: 0.2s ease-out 0s 1 fadeIn;

  ${media.medium} {
    margin-bottom: 15rem;
  }
`;

const Title = styled.h2`
  font-size: 1.512rem;
  color: #7048e8;
`;

export default Expense;
