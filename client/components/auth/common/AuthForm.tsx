import type { KeyboardEvent, MouseEvent, ChangeEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import AuthButton from './AuthButton';
import AuthInput from './AuthInput';
import Right from './Right';

interface Props {
  mode: 'login' | 'register';
  username: string;
  password: string;
  passwordConfirm?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onLogin: (e: MouseEvent) => void;
}

function AuthForm({
  mode,
  username,
  password,
  passwordConfirm,
  onChange,
  onLogin,
}: Props) {
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onLogin(e);
    }
  };

  return (
    <Container>
      <InputGroup>
        <AuthInput
          type="text"
          name="username"
          value={username}
          onChange={onChange}
        />
        <Bar className="bar" />
        <Label>사용자 이름</Label>
      </InputGroup>

      <InputGroup>
        <AuthInput
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <Bar className="bar" />
        <Label>비밀번호</Label>
      </InputGroup>

      {mode === 'register' && passwordConfirm !== undefined && (
        <InputGroup>
          <AuthInput
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
          <Bar className="bar" />
          <Label>비밀번호 확인</Label>
        </InputGroup>
      )}

      <AuthButton
        text={mode === 'login' ? '로그인' : '사원등록'}
        onClick={onLogin}
      />
      <Right mode={mode} />
    </Container>
  );
}

// Styles
const Container = styled.div`
  background: white;
  padding: 2rem;
  height: auto;
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

const Label = styled.label`
  position: absolute;
  color: #212529;
  top: 12px;
  left: 0;
  transition: 0.2s ease all;
`;

const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;
  &:before {
    content: '';
    position: absolute;
    background: #0c8599;
    height: 3px;
    left: 50%;
    right: 50%;
    bottom: 0;
    transition: left 0.2s ease-out, right 0.2s ease-out;
  }
`;

export default AuthForm;
