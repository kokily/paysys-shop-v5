import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

interface LinkProps {
  soldier?: boolean;
  reserve?: boolean;
  general?: boolean;
  cart?: boolean;
  fronts?: boolean;
  password?: boolean;
  weddings?: boolean;
}

interface Props {
  link: string;
}

function Logo({ link }: Props) {
  return (
    <Link href="/soldier">
      <Container
        soldier={link === 'soldier' && true}
        reserve={link === 'reserve' && true}
        general={link === 'general' && true}
        cart={link === 'cart' && true}
        fronts={link === 'fronts' && true}
        password={link === 'password' && true}
        weddings={link === 'weddings' && true}
      >
        행사전표시스템
      </Container>
    </Link>
  );
}

// Styles
const Container = styled.a<LinkProps>`
  font-size: 1.4rem;
  letter-spacing: 2px;
  font-family: 'Rajdhani';
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-shadow: 0.5px 0.5px;
  }
  ${(props) =>
    props.soldier &&
    css`
      color: #1098ad;
    `}
  ${(props) =>
    props.reserve &&
    css`
      color: #68a614;
    `}
    ${(props) =>
    props.general &&
    css`
      color: #e47112;
    `}
    ${(props) =>
    props.cart &&
    css`
      color: #0ca678;
    `}
    ${(props) =>
    props.fronts &&
    css`
      color: #1098ad;
    `}
    ${(props) =>
    props.password &&
    css`
      color: #845ef7;
    `}
    ${(props) =>
    props.weddings &&
    css`
      color: #7048e8;
    `}
`;

export default Logo;
