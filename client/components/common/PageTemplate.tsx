import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles';
import Header from './header/Header';
import BottomNav from './nav/BottomNav';

interface Props {
  children: React.ReactNode;
  user: MeType | null;
}

function PageTemplate({ children, user }: Props) {
  return (
    <>
      <Header user={user} />
      <Main>{children}</Main>
      <BottomNav />
    </>
  );
}

// Styles
const Main = styled.main`
  margin: 6rem 5rem 0rem 5rem;
  ${media.medium} {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media print {
    margin: 0;
  }
`;

export default PageTemplate;
