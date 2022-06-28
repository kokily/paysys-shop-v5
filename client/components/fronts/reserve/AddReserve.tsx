import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../../styles';
import ReserveButton from './ReserveButton';
import ReserveTable from './ReserveTable';

interface Props {
  reserve: number;
  onBack: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddReserve: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
}

function AddReserve({
  reserve,
  onBack,
  onChange,
  onAddReserve,
  onKeyPress,
}: Props) {
  return (
    <Container>
      <LogoBox>
        <h2>예약금 추가</h2>
      </LogoBox>

      <ReserveTable
        reserve={reserve}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />

      <ReserveButton onBack={onBack} onAddReserve={onAddReserve} />
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
  animation: 0.3s ease-out 0s 1 fadeIn;
`;

const LogoBox = styled.div`
  background: #845ef7;
  color: white;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.2rem;
  font-size: 1.212rem;
  font-weight: 800;
  letter-spacing: 2px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  &:hover {
    color: #e5dbff;
  }
`;

export default AddReserve;
