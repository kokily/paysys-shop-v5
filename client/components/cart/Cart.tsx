import type { ChangeEvent, MouseEvent } from 'react';
import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { media } from '../../styles';
import CartTotal from './CartTotal';
import CartInput from './CartInput';
import Button from '../common/Button';

const CartTop = dynamic(() => import('./CartTop'), { ssr: false });

interface Props {
  cart: CartType | undefined;
  title: string;
  hall: string;
  etc: string;
  totalAmount: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddBill: (e: MouseEvent) => void;
  onRemoveOneCart: (id: string, name: string) => void;
  modal: boolean;
  onModalClick: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

function Cart({
  cart,
  title,
  hall,
  etc,
  totalAmount,
  onChange,
  onAddBill,
  onRemoveOneCart,
  modal,
  onModalClick,
  onCancel,
  onConfirm,
}: Props) {
  return (
    <Container>
      <CartTop cart={cart} onRemoveOne={onRemoveOneCart} />
      <CartTotal totalAmount={totalAmount} />

      <Form>
        <div className="center">
          <CartInput
            name="title"
            value={title}
            label="행사명"
            onChange={onChange}
            small
          />
          <CartInput
            name="hall"
            value={hall}
            label="행사홀"
            onChange={onChange}
            small
          />
          <CartInput
            name="etc"
            value={etc}
            label="기타사항"
            onChange={onChange}
          />
        </div>

        <Button submit onClick={onAddBill}>
          전송하기
        </Button>
        <Button remove onClick={onModalClick}>
          전체삭제
        </Button>
      </Form>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-bottom: 6rem;
  ${media.xsmall} {
    width: 100%;
    padding: 0.2rem;
  }
`;

const Form = styled.form`
  margin-top: 1rem;
  .center {
    width: 350px;
  }
  button {
    float: right;
    margin-left: 0.5rem;
  }
`;

export default Cart;
