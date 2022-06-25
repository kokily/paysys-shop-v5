import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { shadow } from '../../../styles';

interface Props {
  mode: 'login' | 'register';
  children: React.ReactNode;
}

function AuthTemplate({ mode, children }: Props) {
  return (
    <Container>
      <Logo>
        <Link href="/">
          <LogoLink>{mode === 'login' ? '로그인' : '사원등록'}</LogoLink>
        </Link>
      </Logo>

      {children}
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
  animation: 0.5s ease-out 0s 1 fadeIn;
  ${shadow(1)};
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Logo = styled.div`
  background: #22b8cf;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoLink = styled.a`
  color: white;
  font-size: 2.4rem;
  font-weight: 800;
  text-decoration: none;
  letter-spacing: 5px;
`;

export default AuthTemplate;
