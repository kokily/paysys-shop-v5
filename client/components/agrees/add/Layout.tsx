import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return <Container>{children}</Container>;
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export default Layout;
