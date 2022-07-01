import React from 'react';
import { stringAccounting } from '../../../../libs/utils';

interface Props {
  event: EventType;
}

function Event({ event }: Props) {
  return (
    <>
      <tr>
        <th>연 주</th>
        <td>{stringAccounting(event.play_husband)}원</td>
        <td>{stringAccounting(event.play_bride)}원</td>
        <td className="sub">
          {stringAccounting(event.play_husband + event.play_bride)}원
        </td>
      </tr>

      <tr>
        <th>축 가</th>
        <td>{stringAccounting(event.anthem_husband)}원</td>
        <td>{stringAccounting(event.anthem_bride)}원</td>
        <td className="sub">
          {stringAccounting(event.anthem_husband + event.anthem_bride)}원
        </td>
      </tr>

      <tr>
        <th>사회자</th>
        <td>{stringAccounting(event.moderator_husband)}원</td>
        <td>{stringAccounting(event.moderator_bride)}원</td>
        <td className="sub">
          {stringAccounting(event.moderator_husband + event.moderator_bride)}원
        </td>
      </tr>

      <tr>
        <th>주 례</th>
        <td>{stringAccounting(event.officiate_husband)}원</td>
        <td>{stringAccounting(event.officiate_bride)}원</td>
        <td className="sub">
          {stringAccounting(event.officiate_husband + event.officiate_bride)}원
        </td>
      </tr>
    </>
  );
}

export default Event;
