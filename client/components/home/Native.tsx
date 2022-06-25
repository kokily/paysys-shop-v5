import React from 'react';
import styled from 'styled-components';
import NativeItem from './NativeItem';

interface Props {
  menu: MenuType[];
  native: string;
  onMenu: (divide: string) => void;
}

function Native({ menu, native, onMenu }: Props) {
  return (
    <Container>
      <Content>
        {native === 'soldier' &&
          menu.map((item) => (
            <NativeItem
              key={item.id}
              divide={item.divide}
              onMenu={() => onMenu(item.divide)}
              soldier
            />
          ))}
        {native === 'reserve' &&
          menu.map((item) => (
            <NativeItem
              key={item.id}
              divide={item.divide}
              onMenu={() => onMenu(item.divide)}
              reserve
            />
          ))}
        {native === 'general' &&
          menu.map((item) => (
            <NativeItem
              key={item.id}
              divide={item.divide}
              onMenu={() => onMenu(item.divide)}
              general
            />
          ))}
      </Content>
    </Container>
  );
}

// Styles
const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 6rem;
`;

const Content = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-bottom: 1rem;
`;

export default Native;
