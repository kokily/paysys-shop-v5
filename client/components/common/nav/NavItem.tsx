import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

function NavItem({ children, href, onClick }: Props) {
  const jsx = <ItemBox onClick={onClick}>{children}</ItemBox>;

  return href ? (
    <Link href={href} passHref={true}>
      <Container style={{ display: 'block' }}>{jsx}</Container>
    </Link>
  ) : (
    jsx
  );
}

// Styles
const Container = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const ItemBox = styled.div`
  padding: 0.75rem 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #474747;
  cursor: pointer;
  &:hover {
    color: white;
    background: #5baaaa;
  }
`;

export default NavItem;
