import React from 'react';
import styled from 'styled-components';
import ActiveLink from './../ActiveLink';

interface Props {
  href: string;
  icon: string;
  name: string;
}

function BottomNavItem({ href, icon, name }: Props) {
  return (
    <ActiveLink href={href} activeClassName="active">
      <Anchor>
        <i className="material-icons">{icon}</i>
        {name}
      </Anchor>
    </ActiveLink>
  );
}

// Styles
const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-grow: 1;
  min-width: 20%;
  overflow: hidden;
  white-space: nowrap;
  -webkit-tab-highlight-color: transparent;
  transition: background-color 0.1s ease-in-out;
  &.active {
    color: #49b886;
  }
  &:hover {
    background: #c3fae8;
  }
`;

export default BottomNavItem;
