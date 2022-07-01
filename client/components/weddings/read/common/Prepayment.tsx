import React from 'react';
import { stringAccounting } from '../../../../libs/utils';

interface Props {
  prepayment: PrepaymentType | null;
}

function Prepayment({ prepayment }: Props) {
  return (
    <>
      {prepayment ? (
        <tr>
          <th>선입금</th>

          <td style={{ color: 'red' }}>
            -{stringAccounting(prepayment.prepayment_husband)}원
          </td>
          <td style={{ color: 'red' }}>
            -{stringAccounting(prepayment.prepayment_bride)}원
          </td>
          <td className="sub" style={{ color: 'red' }}>
            -
            {stringAccounting(
              prepayment.prepayment_husband + prepayment.prepayment_bride
            )}
            원
          </td>
        </tr>
      ) : (
        <tr>
          <th>선입금</th>

          <td style={{ color: 'red' }}>-0원</td>
          <td style={{ color: 'red' }}>-0원</td>
          <td className="sub" style={{ color: 'red' }}>
            -0원
          </td>
        </tr>
      )}
    </>
  );
}

export default Prepayment;
