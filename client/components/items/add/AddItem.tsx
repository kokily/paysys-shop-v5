import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../../styles';
import Button from '../../common/Button';
import ItemInput from './ItemInput';
import ItemSelect from './ItemSelect';

interface Props {
  edit?: boolean;
  name: string;
  divide: string;
  native: string;
  unit: string;
  price: string;
  onBack: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onAddItem: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
}

function AddItem({
  edit,
  name,
  divide,
  native,
  unit,
  price,
  onBack,
  onChange,
  onAddItem,
  onKeyPress,
}: Props) {
  const divideArray = [
    '식사(뷔페)',
    '식사(중식)',
    '식사(양식)',
    '식사(한식)',
    '식사(수행)',
    '식사(다과)',
    '대관료',
    '레드와인',
    '화이트와인/샴페인',
    '주스/차',
    '민속주/고량주',
    '양주',
    '기타주류',
    '칵테일',
    '반입료',
    '부대비용',
  ];
  const nativeArray = ['현역', '예비역', '일반'];

  return (
    <Container>
      <Logo>품목 등록</Logo>

      <Form>
        <ItemInput
          name="name"
          value={name}
          onChange={onChange}
          label="품 명"
          focus
        />

        <ItemSelect
          name="divide"
          value={divide}
          onChange={onChange}
          data={divideArray}
        />
        <ItemSelect
          name="native"
          value={native}
          onChange={onChange}
          data={nativeArray}
        />

        <ItemInput name="unit" value={unit} onChange={onChange} label="단 위" />
        <ItemInput
          name="price"
          value={price}
          onChange={onChange}
          label="단 가"
          onKeyPress={onKeyPress}
        />

        <ButtonsBox>
          <Button submit fullSize onClick={onAddItem}>
            {edit ? '저장하기' : '등록하기'}
          </Button>
          <Button cancel fullSize onClick={onBack}>
            취소하기
          </Button>
        </ButtonsBox>
      </Form>
    </Container>
  );
}

// Styles
const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${shadow(1)};
  animation: 0.5s ease-out 0s 1 fadeIn;
`;

const Logo = styled.div`
  background: #22b8cf;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  &:hover {
    color: #99e9f2;
  }
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  height: auto;
`;

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default AddItem;
