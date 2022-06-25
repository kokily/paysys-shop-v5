import type { ChangeEvent, MouseEvent } from 'react';
import React from 'react';
import AuthForm from './common/AuthForm';

interface Props {
  username: string;
  password: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onLogin: (e: MouseEvent) => void;
}

function Login({ username, password, onChange, onLogin }: Props) {
  return (
    <AuthForm
      mode="login"
      username={username}
      password={password}
      onChange={onChange}
      onLogin={onLogin}
    />
  );
}

export default Login;
