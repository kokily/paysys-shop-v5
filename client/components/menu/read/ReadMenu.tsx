import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../../styles';
import CartInput from './CartInput';
import CartTable from './CartTable';
import ReadMenuButtons from './ReadMenuButtons';

interface Props {
  menu: ItemType | undefined;
  count: number;
  price: number;
  onBack: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddCart: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
}

function ReadMenu({
  menu,
  count,
  price,
  onBack,
  onChange,
  onAddCart,
  onKeyPress,
}: Props) {
  return (
    <>
      {menu && (
        <Container>
          <Logo>
            {menu.divide} | {menu.native}
          </Logo>

          <Contents>
            <CartTable menu={menu} price={price} onChange={onChange} />

            <hr />

            <CartInput
              menu={menu}
              price={price}
              count={count}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />

            <ReadMenuButtons onAddCart={onAddCart} onBack={onBack} />
          </Contents>
        </Container>
      )}
    </>
  );
}

// Styles
const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  ${shadow(1)};
  animation: 0.5s ease-out 0s 1 fadeIn;
`;

const Logo = styled.div`
  background: #ff6b6b;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: 2px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #ffe3e3;
  }
`;

const Contents = styled.div`
  background: white;
  padding: 1.5rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    outline: none;
    padding: 0.5rem;
    margin-left: 1rem;
    border-radius: 4px;
  }
`;

export default ReadMenu;
