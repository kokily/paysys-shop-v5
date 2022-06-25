import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';

interface Props {
  menu: ItemType;
  price: number;
  count: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
}

function CartInput({ menu, price, count, onChange, onKeyPress }: Props) {
  return (
    <>
      <div className="number">
        <label htmlFor="count">수 량</label>
        <input
          type="number"
          name="count"
          value={count}
          onChange={onChange}
          onKeyPress={onKeyPress}
          autoFocus
        />
      </div>

      <Total>
        <h3>
          합계 금액:{' '}
          {menu.price === 0 ? (
            <>
              {(price * count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </>
          ) : (
            <>
              {(menu.price * count)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </>
          )}
        </h3>
      </Total>
    </>
  );
}

// Styles
const Total = styled.div`
  text-align: right;
  color: red;
  margin-bottom: 0;
  padding-bottom: 0.5rem;
  h3 {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export default CartInput;
