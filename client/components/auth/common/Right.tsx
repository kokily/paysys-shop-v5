import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  mode: 'login' | 'register';
}

function Right({ mode }: Props) {
  return (
    <Container>
      {mode === 'login' ? (
        <Link href="/register">
          <Button>사원등록</Button>
        </Link>
      ) : (
        <Link href="/">
          <Button>로그인</Button>
        </Link>
      )}
    </Container>
  );
}

// Styles
const Container = styled.div`
  margin-top: 1rem;
  text-align: right;
`;

const Button = styled.a`
  text-decoration: none;
  color: #868e96;
  cursor: pointer;
  &:hover {
    color: #495057;
  }
`;

export default Right;
