import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../../styles';

interface Props {
  front: BillType;
}

function FrontTable({ front }: Props) {
  return (
    <Container>
      <thead>
        <tr>
          <th>구분</th>
          <th>상품명</th>
          <th>단가</th>
          <th>수량</th>
          <th>소계</th>
        </tr>
      </thead>
      <tbody>
        {front.items === null || front.items.length === 0 ? (
          <tr>
            <td colSpan={4}>데이터가 없습니다.</td>
          </tr>
        ) : (
          <>
            {front.items?.map((item) => (
              <tr key={item.id}>
                <Td
                  soldier={item.native === '현역'}
                  reserve={item.native === '예비역'}
                  general={item.native === '일반'}
                >
                  {item.native}
                </Td>
                <Td
                  soldier={item.native === '현역'}
                  reserve={item.native === '예비역'}
                  general={item.native === '일반'}
                >
                  {item.name}
                </Td>
                <Td
                  soldier={item.native === '현역'}
                  reserve={item.native === '예비역'}
                  general={item.native === '일반'}
                >
                  <span style={{ color: '#868e96' }}>
                    {item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </span>
                </Td>
                <Td
                  soldier={item.native === '현역'}
                  reserve={item.native === '예비역'}
                  general={item.native === '일반'}
                >
                  {item.count}
                </Td>
                <Td
                  soldier={item.native === '현역'}
                  reserve={item.native === '예비역'}
                  general={item.native === '일반'}
                >
                  {(item.price * item.count)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </Td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </Container>
  );
}

// Styles
const Container = styled.table`
  width: 100%;
  padding: 0;
  border-radius: 0.8rem;
  overflow: hidden;

  tr:hover {
    background: #91a7ff;
    color: white;
    strong {
      color: #c92a2a;
    }
  }
  th,
  td {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
    strong {
      color: #364fc7;
    }
  }
  th {
    background: #364fc7;
    color: white;
  }

  @media print {
    th {
      color: blue;
    }
    td {
      color: black;
    }
  }
`;

const Td = styled.td<{
  soldier?: boolean;
  reserve?: boolean;
  general?: boolean;
}>`
  ${media.small} {
    ${(props) =>
      props.soldier &&
      css`
        background: #1098ad;
        color: white;
      `}
    ${(props) =>
      props.reserve &&
      css`
        background: #74b816;
        color: white;
      `}
  ${(props) =>
      props.general &&
      css`
        background: #fd7e14;
        color: white;
      `}
  }
`;

export default FrontTable;
