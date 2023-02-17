import React from 'react';
import styled from 'styled-components';
import { stringAccounting } from '../../../libs/utils';
import Company from './common/Company';
import Convention from './common/Convention';

interface Props {
  wedding: WeddingType;
  convention: ConventionType;
  company: CompanyType;
}

function ReadWeddingFirst({ wedding, convention, company }: Props) {
  return (
    <Container>
      <tbody>
        <tr>
          <th colSpan={4}>예식비용</th>
        </tr>

        <Convention convention={convention} />
        <Company company={company} />

        <tr>
          <th style={{ background: 'white', color: '#d941c5' }}>총 예식비용</th>
          <td style={{ color: '#d941c5' }}>
            {stringAccounting(wedding.cost_husband)}원
          </td>
          <td style={{ color: '#d941c5' }}>
            {stringAccounting(wedding.cost_bride)}원
          </td>
          <td style={{ color: '#d941c5', fontWeight: 'bold' }}>
            {stringAccounting(wedding.cost_husband + wedding.cost_bride)}원
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

  @media print {
    margin-top: 25.78px;
  }

  th,
  td {
    border: 1px solid #ced4da;
    border-radius: 8px;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
  }

  tr {
    &:hover {
      background: rgba(165, 102, 255, 0.2);
    }
  }

  th {
    background: #e3e0fa;
    color: #5f3dc4;
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
`;

export default ReadWeddingFirst;
