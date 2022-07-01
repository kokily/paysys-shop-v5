import React from 'react';
import styled from 'styled-components';
import { AddExpensePayload } from '../../libs/types';
import ExpenseInput from './ExpenseInput';

interface Props {
  expense: AddExpensePayload;
}

function ExpenseName({ expense }: Props) {
  return (
    <Container>
      <span>신랑님: </span>
      <strong>
        <ExpenseInput
          name="husband_name"
          value={expense.husband_name}
          onChange={expense.onChange}
        />
      </strong>

      <span>신부님: </span>
      <strong>
        <ExpenseInput
          name="bride_name"
          value={expense.bride_name}
          onChange={expense.onChange}
        />
      </strong>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;

  h3 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }

  strong {
    margin-right: 0.5rem;
  }
`;

export default ExpenseName;
