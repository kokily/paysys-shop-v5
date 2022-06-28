import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../../styles';
import PasswordButtons from './PasswordButtons';
import PasswordTable from './PasswordTable';

interface Props {
  password: string;
  onBack: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
}

function ChangePassword({
  password,
  onBack,
  onChange,
  onChangePassword,
  onKeyPress,
}: Props) {
  return (
    <Container>
      <LogoBox>
        <h2>비밀번호 변경</h2>
      </LogoBox>

      <PasswordTable
        password={password}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />

      <PasswordButtons onBack={onBack} onChangePassword={onChangePassword} />
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

export default ChangePassword;
