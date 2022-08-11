import React from 'react';
import styled, { css } from 'styled-components';
import { shadow } from '../../../styles';
import NavItem from './NavItem';

interface Props {
  isAdmin: boolean;
  onClose: (e: any) => void;
  onLogout: () => void;
  visible: boolean;
}

function NavList({ isAdmin, onClose, onLogout, visible }: Props) {
  return (
    <Container visible={visible} onClick={onClose}>
      <Wrapper>
        {visible && (
          <>
            <NavItem href="/password">비밀번호 변경</NavItem>

            {isAdmin && (
              <>
                <Split />

                <NavItem href="/weddings">웨딩빌지</NavItem>
                <NavItem href="/items">품목 리스트</NavItem>

                <Split />

                <NavItem href="/users">사용자 목록</NavItem>

                <Split />

                <NavItem href="/agrees/success">동의 목록</NavItem>

                <Split />

                <NavItem href="/result/toptitle">행사별 현황</NavItem>
              </>
            )}
          </>
        )}

        <Split />

        <NavItem onClick={onLogout}>로그아웃</NavItem>
      </Wrapper>
    </Container>
  );
}

// Styles
const Container = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 100%;
  margin-top: 0.22rem;
  right: 0;
  ${shadow(5)};
  transition: 0.16s transform;

  ${(props) =>
    props.visible
      ? css`
          opacity: 1;
          transform: scale(1);
        `
      : css`
          opacity: 0;
          transform: scale(0.5);
        `}
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 5;
  width: 12rem;
  background: white;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
`;

const Split = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  height: 2px;
  background: linear-gradient(to right, #36ac71, #398eb6);
`;

export default NavList;
