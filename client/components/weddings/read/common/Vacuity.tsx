import React from 'react';
import styled from 'styled-components';

function Vacuity() {
  return (
    <tr>
      <Th colSpan={4}></Th>
    </tr>
  );
}

const Th = styled.th`
  background: white;
  color: white;
  border-color: white;
  height: 27.78px;

  @media print {
    height: 24px;
  }
`;

export default Vacuity;
