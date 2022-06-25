import React from 'react';
import styled, { css } from 'styled-components';
import { shadow } from '../../styles';

interface Props {
  soldier?: boolean;
  reserve?: boolean;
  general?: boolean;
  divide?: string;
  onMenu?: (e: React.MouseEvent) => void;
}

function NativeItem({ soldier, reserve, general, divide, onMenu }: Props) {
  return (
    <Container
      onClick={onMenu}
      soldier={soldier && true}
      reserve={reserve && true}
      general={general && true}
    >
      {divide}
    </Container>
  );
}

// Styles
const Container = styled.div<Props>`
  ${(props) =>
    props.soldier &&
    css`
      background: #1098ad;
    `}
  ${(props) =>
    props.reserve &&
    css`
      background: #68a614;
    `}
  ${(props) =>
    props.general &&
    css`
      background: #e47112;
    `}
  color: white;
  ${shadow(1)};
  font-size: 1.215rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 55px;
  cursor: pointer;
  -webkit-filter: brightness(0.9);
  filter: brightness(0.9);
  &:hover {
    -webkit-filter: brightness(1);
    filter: brightness(1);
  }
  &:active {
    transform: translateY(3px);
  }
`;

export default NativeItem;
