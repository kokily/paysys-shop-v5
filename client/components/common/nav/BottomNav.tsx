import React from 'react';
import styled from 'styled-components';
import BottomNavItem from './BottomNavItem';
import { shadow } from '../../../styles';

interface Props {}

function BottomNav() {
  return (
    <Container>
      <Contents>
        <BottomNavItem href="/soldier" icon="military_tech" name="현 역" />
        <BottomNavItem href="/reserve" icon="camera_enhance" name="예비역" />
        <BottomNavItem href="/general" icon="face" name="일 반" />
        <BottomNavItem href="/cart" icon="shopping_cart" name="전표확인" />
        <BottomNavItem href="/fronts" icon="receipt_long" name="빌지목록" />
      </Contents>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  max-width: 768px;
  height: 60px;
  ${shadow(1)}
  display: flex;
  overflow-x: auto;
`;

export default BottomNav;
