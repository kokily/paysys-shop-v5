import type { MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import { MdArrowDropDown } from 'react-icons/md';

interface Props {
  onClick?: (e: MouseEvent) => void;
}

function Apeach({ onClick }: Props) {
  return (
    <Container onClick={onClick}>
      <ImageBox />
      <MdArrowDropDown />
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    font-size: 1.5rem;
    margin-left: 0.25rem;
    color: #9e9e9e;
    transition: 0.125s all ease-in;
    margin-right: -0.4375rem;
  }
  &:hover {
    div {
      background-image: url('/user2.png');
    }
    svg {
      color: #4d4d4d;
    }
  }
`;

const ImageBox = styled.div`
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  transition: 0.125s all ease-in;
  background-image: url('/user.png');
`;

export default Apeach;
